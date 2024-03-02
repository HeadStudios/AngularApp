import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpEventType, HttpResponse } from "@angular/common/http";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

interface ApiResponse {
  message: string;
  contact?: any; // Adjust according to the structure of your 'contact' object
}

interface ContactList {
  id: number;
  name: string;
  // ... other properties
}

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.page.html",
  styleUrls: ["./contact-form.page.scss"],
})
export class ContactFormPage implements OnInit {
  // Object to hold form data
  formData = {
    name: "",
    email: "",
    mobile: "",
    bio: "",
    contactListIds: [],
  };
  contactLists: any[] = [];
  selectedImageBlob: Blob | null = null;

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.fetchContactLists();
  }

  // Method to fetch contact lists
  fetchContactLists() {
    this.http
      .get<any[]>("https://staging.rrdevours.monster/api/contactLists") // API endpoint to get contact lists
      .toPromise()
      .then((response) => {
        this.contactLists = response.map((contactList) => ({
          ...contactList,
          // Auto-select 'Homeless Resistance' by setting its `selected` property to true
          selected: contactList.name === "Homeless Resistance",
        }));
      })
      .catch((error) => {
        console.error("Error fetching contact lists:", error);
      });
  }

  async submitForm(form: NgForm) {
    console.log("Submit Form Called", form.value);
    if (form.valid) {
      // Use FormData for multipart/form-data
      const formData = new FormData();

      // Append text fields to formData
      formData.append("name", this.formData.name);
      formData.append("email", this.formData.email);
      formData.append("mobile", this.formData.mobile);
      formData.append("bio", this.formData.bio);

      // Append selected contact list IDs
      this.formData.contactListIds = this.contactLists
        .filter((cl) => cl.selected)
        .map((cl) => cl.id);
      this.formData.contactListIds.forEach((id, index) => {
        formData.append(`contactListIds[${index}]`, id.toString());
      });

      if (this.selectedImageBlob) {
        formData.append(
          "profile_photo",
          this.selectedImageBlob,
          "uploaded_image.jpg"
        );
      }

      // Observable-based HTTP POST request to include progress events
      this.http
        .post<ApiResponse>(
          "https://staging.rrdevours.monster/api/contacts/store",
          formData,
          {
            reportProgress: true,
            observe: "events",
          }
        )
        .subscribe(
          (event) => {
            if (event.type === HttpEventType.UploadProgress) {
              // Calculate and show upload progress
              const percentDone = event.total
                ? Math.round((100 * event.loaded) / event.total)
                : 0;
              console.log(`File is ${percentDone}% uploaded.`);
            } else if (event instanceof HttpResponse) {
              // Handle success
              console.log("File is completely uploaded!");
              const contactId = event.body.contact?.id;
              if (contactId) {
                this.router.navigate(["/speaker-details", { id: contactId }]); // Navigate to speaker details
              }
              this.showAlert("Success", "Form submitted successfully!");
              form.reset();
              this.selectedImageBlob = null; // Reset selected file
            }
          },
          (error) => {
            console.error("There was a problem with the API:", error);
            if (error.status === 409) {
              // Handle the case where contact already exists
              const buttons = [
                {
                  text: "Cancel",
                  role: "cancel",
                  handler: () => {
                    console.log("Cancel clicked");
                  },
                },
                {
                  text: "Overwrite",
                  handler: () => {
                    console.log("Overwrite clicked");
                    this.overwriteContact(); // Adapt this function for FormData as needed
                  },
                },
              ];
              this.showAlert(
                "Contact Exists",
                "A contact with this mobile number already exists.",
                buttons
              );
            } else {
              // Handle other errors
              this.showAlert(
                "Error",
                "An error occurred while processing the request."
              );
            }
          }
        ); // This was missing a closing curly brace for the method
    }
  }

  // Correctly implemented showAlert method
  async showAlert(header: string, message: string, buttons: any[] = ["OK"]) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: buttons,
    });

    await alert.present();
  }

  async overwriteContact() {
    console.log("Overwriting contact:", this.formData);
    try {
      const response = await this.http
        .post<ApiResponse>(
          "https://staging.rrdevours.monster/api/contacts/store",
          { ...this.formData, overwrite: true } // Include the overwrite parameter
        )
        .toPromise();
      this.showAlert("Success", "Contact updated successfully!");
      // Add any additional logic needed after successful update
    } catch (error) {
      console.error("There was a problem with the API:", error);
      this.showAlert(
        "Error",
        "An error occurred while processing the request."
      );
    }
  }

  // Modify this method to use the Capacitor Camera plugin
  async onImageSelected() {
    try {
      const image = await Camera.getPhoto({
        quality: 40, // 100 is full quality, so 40 is 60% reduced quality
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera, // Use CameraSource.Photos for gallery
      });

      const response = await fetch(image.webPath);
      const blob = await response.blob();

      this.selectedImageBlob = blob;
      this.presentToast("Image captured successfully.");
    } catch (error) {
      console.error("Error capturing the image:", error);
      this.presentToast("Error selecting image");
    }
  }

  // Add this new method
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async compressImage(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const maxWidth = 800; // Set the maximum width you want for images
        const maxHeight = 800; // Set the maximum height you want for images
        let width = image.width;
        let height = image.height;

        // Calculate the new dimensions
        if (width > height) {
          if (width > maxWidth) {
            height = height * (maxWidth / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = width * (maxHeight / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, width, height);

        ctx.canvas.toBlob(
          (blob) => {
            const newFile = new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            });
            resolve(newFile);
          },
          "image/jpeg",
          0.7
        ); // Adjust the quality (0.7 is roughly 70% quality)
      };
      image.onerror = (error) => reject(error);
    });
  }
}
