import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


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
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
})
export class ContactFormPage implements OnInit {
  // Object to hold form data
  formData = {
    name: '',
    email: '',
    mobile: '',
    injustice: ''
  };
  contactLists: any[] = [];

  constructor(private http: HttpClient, private alertController: AlertController, private router: Router) { }

  ngOnInit() {
    this.fetchContactLists();
  }

  // Method to fetch contact lists
  fetchContactLists() {
    this.http.get<any[]>('https://staging.rrdevours.monster/api/contactLists') // API endpoint to get contact lists
      .toPromise()
      .then(response => {
        this.contactLists = response;
      })
      .catch(error => {
        console.error('Error fetching contact lists:', error);
      });
  }

  async submitForm(form: NgForm) {
    console.log('Submit Form Called', form.value);
    if (form.valid) {
      const selectedContactListIds = this.contactLists
        .filter(cl => cl.selected)
        .map(cl => cl.id);
      this.http.post<ApiResponse>('https://staging.rrdevours.monster/api/contacts/store', this.formData)
        .toPromise()
        .then(response => {

          const contactId = response.contact?.id;
          if (contactId) {
            this.router.navigate(['/speaker-details', { id: contactId }]); // Navigate to speaker details
          }
          // Handle successful response
          this.showAlert('Success', 'Form submitted successfully!');
          form.reset();
        })
        .catch(error => {
          if (error.status === 409) {
            // Handle the case where contact already exists
            console.log("Contact already exists");
            
            const buttons = [
              {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked - I hear ya bruda');
                  // Add any additional logic for Cancel here if needed
                }
              },
              {
                text: 'Overwrite',
                handler: () => {
                  console.log('Overwrite clicked - we hear ya');
                  this.overwriteContact(); // Call a function to handle overwriting the contact
                }
              }
            ];
        
            this.showAlert('Contact Exists', 'A contact with this mobile number already exists.', buttons);

          } else {
            // Handle other errors
            console.error('There was a problem with the API:', error);
            this.showAlert('Error', 'An error occurred while processing the request.');
          }
        });
    }
  }

  // Hello 

  testFunction() {
    console.log('Test Function Called');
  } 

  async showAlert(header: string, message: string, buttons: any[] = ['OK']) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons
    });
  
    await alert.present();
  }

  async overwriteContact() {
    console.log('Overwriting contact:', this.formData);
    try {
      const response = await this.http.post<ApiResponse>(
        'https://staging.rrdevours.monster/api/contacts/store',
        { ...this.formData, overwrite: true } // Include the overwrite parameter
      ).toPromise();
      this.showAlert('Success', 'Contact updated successfully!');
      // Add any additional logic needed after successful update
    } catch (error) {
      console.error('There was a problem with the API:', error);
      this.showAlert('Error', 'An error occurred while processing the request.');
    }
  }
}
