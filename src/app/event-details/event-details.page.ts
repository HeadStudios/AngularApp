import { Component, OnInit, Sanitizer } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ToastController, ModalController } from "@ionic/angular"; // Add ModalController here
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { FileEntry, File as IonicFile } from "@ionic-native/file/ngx";
import { Filesystem, Directory } from '@capacitor/filesystem'; 
import { DomSanitizer } from '@angular/platform-browser';
import { AddTaskModalComponent } from '../add-task-modal/add-task-modal.component'; // Add this line
import { Router } from '@angular/router';
import { IonItemSliding } from '@ionic/angular'; // Make sure IonItemSliding is imported




@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.page.html",
  styleUrls: ["./event-details.page.scss"],
})
export class EventDetailsPage implements OnInit {
  injusticeId: number;
  injusticeDetails: any = {};
  contactId?: number;
  awsBaseUrl = environment.awsBaseUrl;
  selectedFiles: FileList;
  notes: any[] = [];
  newNoteText: string = "";
  selectedImageUri: string = "";
  customFileName: string = '';
  public injusticeUrl: string;
  customFileUploadName: string = '';
  customVideoName: string = '';
  // Add a property to track the currently expanded note
  expandedNoteId: number | null = null;
  expandedNoteIds: number[] = [];






  constructor(
    private sanitizer: DomSanitizer,
    private imagePicker: ImagePicker,
    private http: HttpClient,
    private route: ActivatedRoute,
    private toastController: ToastController,
    private file: IonicFile,
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.injusticeId = Number(this.route.snapshot.paramMap.get("id"));
    this.fetchInjusticeDetails();
    this.fetchNotes();
    this.fetchInjusticeUrl();
  }

  openGallery() {
    const options = {
      maximumImagesCount: 1,
      // other options as needed
    };

    this.imagePicker.getPictures(options).then(
      (results) => {
        if (results.length > 0) {
          this.selectedImageUri = results[0]; // Store the first selected image URI
          this.presentToast("Image URI: " + this.selectedImageUri);
          this.uploadSelectedImage();
        } else {
          this.presentToast("No image selected");
        }
      },
      (err) => {
        console.error(err);
        this.presentToast("Error selecting image: " + err);
      }
    );
  }

  // Go

  getFileCategory(fileName: string): string {
    const extension = fileName.split(".").pop().toLowerCase();
    if (["png", "jpg", "jpeg", "gif"].includes(extension)) {
      return "image";
    } else if (["pdf", "doc", "docx"].includes(extension)) {
      return "document";
    } else if (["mp4", "avi", "mov"].includes(extension)) {
      return "video";
    } else {
      return "other";
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  fetchInjusticeDetails() {
    this.http
      .get(`https://rrdevours.monster/api/injustices/${this.injusticeId}`)
      .subscribe(
        (data: any) => { // Use `any` type here
          this.injusticeDetails = { ...data, tasks: data.tasks || [] };
          this.contactId = data.contact_id;
        },
        (error) => {
          console.error("Error fetching injustice details!", error);
        }
      );
  }

  fetchNotes() {
    this.http
      .get(
        `https://staging.rrdevours.monster/api/injustices/${this.injusticeId}/notes`
      )
      .subscribe(
        (data: any) => {
          this.notes = data;
        },
        (error) => {
          console.error("Error fetching notes!", error);
        }
      );
  }

  addNote() {
    if (!this.newNoteText.trim()) return;
  
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const userId = user.id; // Make sure this is the correct property for the user's ID
  
    const newNote = {
      text: this.newNoteText,
      notable_id: this.injusticeId,
      notable_type: "App\\Models\\Injustice",
      system: 0,
      created_by: userId,
    };
  
    this.http
      .post(
        `https://staging.rrdevours.monster/api/injustices/${this.injusticeId}/notes`,
        newNote
      )
      .subscribe(
        (response: any) => {
          // Assuming the response includes the complete new note object
          const completeNote = response.note; // Use the note object from the response
          this.notes.push(completeNote); // Add the complete note to the notes array
          this.newNoteText = ""; // Clear the input field
          this.presentToast("Note added successfully");
        },
        (error) => {
          console.error("Error adding note!", error);
          this.presentToast("Error adding note");
        }
      );
  }

  hasImages(): boolean {
    return this.injusticeDetails.media.some((item) => item.layout === "image");
  }

  hasVideos(): boolean {
    return this.injusticeDetails.media.some((item) => item.layout === "video");
  }

  hasDocuments(): boolean {
    return this.injusticeDetails.media.some(
      (item) => item.layout === "document"
    );
  }

  getImageMedia() {
    return this.injusticeDetails.media.filter(
      (item) => item.layout === "image"
    );
  }

  getVideoMedia() {
    return this.injusticeDetails.media.filter(
      (item) => item.layout === "video"
    );
  }

  getDocumentMedia() {
    return this.injusticeDetails.media.filter(
      (item) => item.layout === "document"
    );
  }

  onFileSelected(event) {
    this.selectedFiles = event.target.files;
    if (this.selectedFiles.length > 0) {
      // For simplicity, assuming only one file is selected
      const file = this.selectedFiles[0];
      this.uploadFile(file, this.customFileUploadName || file.name);
    }
  }

  uploadFiles() {
    const files = this.selectedFiles;
    if (files.length === 0) {
      return;
    }

    for (let i = 0; i < files.length; i++) {
      this.uploadFile(files[i]);
    }
  }

  uploadFile(file: Blob, fileName?: string) {
    const formData = new FormData();
    formData.append("file", file, fileName);
    formData.append("id", this.injusticeId.toString());

    const fileCategory = this.getFileCategory(fileName);
    formData.append("category", fileCategory);

    this.presentToast("Uploading file with name: " + fileName);

    //const uploadUrl = `https://staging.rrdevours.monster/api/injustices/${this.injusticeId}/upload`;
    // use a temp webhook.site URL to troubleshoot lack of POST requests - you can view requests in: https://webhook.site/#!/5181ba22-f5a8-4734-907b-eca1c65f8855
    const uploadUrl = `https://staging.rrdevours.monster/api/injustices/${this.injusticeId}/upload`;

    this.http.post(uploadUrl, formData).subscribe(
      (response: any) => {
        console.log("File uploaded successfully", response);
        const fileUrl = response.url;
        this.presentToast(`File uploaded successfully: ${fileUrl}`);
        this.fetchInjusticeDetails();
      },
      (error) => {
        console.error("Error uploading file", error);
        this.presentToast("Error uploading file");
      }
    );
  }

  getFileNameFromUrl(url: string): string {
    return url.split("/").pop(); // This will get the part of the URL after the last '/'
  }

  uploadSelectedImage() {
    if (!this.selectedImageUri) {
      this.presentToast("No image selected");
      return;
    }

    // Convert the image URI to a Blob or File object
    this.uriToBlob(this.selectedImageUri)
      .then((blob) => {
        const fileName = this.customFileName || "image.jpg";
        // Call the existing uploadFile method with this File object
        this.uploadFile(blob, fileName);
      })
      .catch((err) => {
        console.error("Error converting URI to blob", err);
        this.presentToast("Error uploading image: " + JSON.stringify(err));
      });
  }

  uriToBlob(uri: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      this.file
        .resolveLocalFilesystemUrl(uri)
        .then(async (entry: FileEntry) => {
          // retrieve the image
          const response = await fetch(
            Capacitor.convertFileSrc(entry.nativeURL)
          );

          // convert to a Blob
          const blob = await response.blob();

          resolve(blob);
        })
        .catch((e) => reject(e));
    });
  }

  fetchInjusticeUrl() {
    this.http.get(`https://sunlight.quest/api/injustice/${this.injusticeId}/generate-url`)
      .subscribe(
        (response: any) => {
          this.injusticeUrl = response.url;
        },
        (error) => {
          console.error("Error fetching URL!", error);
        }
      );
  }

  copyToClipboard(url: string) {
    navigator.clipboard.writeText(url).then(
      () => {
        // Handle success, e.g., show a toast notification
        console.log("URL copied to clipboard");
      },
      () => {
        // Handle failure
        console.error("Failed to copy URL");
      }
    );
  }

  onVideoSelected(event) {
    const videoFile = event.target.files[0];
    if (videoFile) {
      this.uploadFile(videoFile, this.customVideoName || videoFile.name);
    } else {
      this.presentToast("No video selected");
    }
  }

  transformNewlines(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text.replace(/\n/g, '<br>'));
  }

  async openAddTaskModal() {
    const modal = await this.modalController.create({
      component: AddTaskModalComponent,
      componentProps: {
        injusticeId: this.injusticeId // This should be the current Injustice ID
      }
    });
  
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
    if (data?.taskAdded) {
      this.fetchInjusticeDetails();
    }
  }

  // Add a method to toggle the expansion of a note
  toggleNoteExpansion(noteId: number) {
    // Check if the noteId is not already in the expandedNoteIds array
    if (!this.expandedNoteIds.includes(noteId)) {
      // Add the noteId to the expandedNoteIds array if it's not already present
      // This ensures the note stays expanded once clicked
      this.expandedNoteIds.push(noteId);
    }
    // Note: The functionality to remove an ID from expandedNoteIds (to collapse a note) is intentionally omitted
    // This means once a note is expanded, it cannot be collapsed by clicking on it again
  }

  toggleTaskStatus(task, itemSliding: IonItemSliding) {
    const newStatus = task.status ? 0 : 1; // Toggle the status
    this.http.patch(`https://rrdevours.monster/api/tasks/${task.id}/status`, { status: newStatus })
      .subscribe({
        next: (response) => {
          task.status = newStatus; // Update the local task status on success
          this.presentToast('Task status updated successfully.');
          itemSliding.close(); // Close the sliding item
        },
        error: (error) => {
          console.error('Error updating task status!', error);
          this.presentToast('Error updating task status.');
          itemSliding.close(); // Ensure the sliding item is closed even if there's an error
        }
      });
  }

  // Add this method to handle navigation
  viewContactDetails() {
    if (this.contactId) {
      this.router.navigate(['/speaker-details', { id: this.contactId }]);
    }
  }

  deleteTask(taskToDelete, itemSliding: IonItemSliding) {
    // Replace 'your-api-url' with 'https://rrdevours.monster/api/tasks'
    this.http.delete(`https://rrdevours.monster/api/tasks/${taskToDelete.id}`).subscribe({
        next: (response) => {
            // Successfully deleted the task from the backend, now remove it from the UI
            this.injusticeDetails.tasks = this.injusticeDetails.tasks.filter(task => task.id !== taskToDelete.id);
            this.presentToast('Task deleted successfully.');
            itemSliding.close(); // Ensure the sliding item is closed
        },
        error: (error) => {
            console.error('Error deleting task!', error);
            this.presentToast('Error deleting task.');
            itemSliding.close(); // Ensure the sliding item is closed even if there's an error
        }
    });
}

  toggleInjusticeStatus() { 
    // Update the URL format to match your specified pattern
    this.http.patch(`https://rrdevours.monster/api/injustices/${this.injusticeId}/status`, { status: this.injusticeDetails.status })
      .subscribe({
        next: (response: any) => {
          // Assuming the response includes the updated status, you might want to update your local state as well
          this.injusticeDetails.status = response.status;
          this.presentToast('Injustice status updated successfully.');
        },
        error: (error) => {
          console.error('Error updating injustice status!', error);
          this.presentToast('Error updating injustice status.');
        }
      });
  }
}
