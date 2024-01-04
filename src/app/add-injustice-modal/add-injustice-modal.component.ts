import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-injustice-modal',
  templateUrl: './add-injustice-modal.component.html',
  styleUrls: ['./add-injustice-modal.component.scss'],
})
export class AddInjusticeModalComponent {
  @Input() contactId: number; // Receive contactId
  @Output() injusticeAdded = new EventEmitter<boolean>(); 

  injustice: any = {};

  constructor(
    private toastController: ToastController,
    private http: HttpClient, // Inject HttpClient
    private modalController: ModalController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  submitInjustice(title: string, description: string) {

    // Add contactId to injustice object
    this.injustice.contact_id = this.contactId;

    const injusticeData = {
      title: title,
      description: description,
      contact_id: this.contactId
    };

    // Stringify and show the injustice object in a toast
    const injusticeStr = JSON.stringify(this.injustice);
    this.presentToast(injusticeStr).then(() => {
      // Post injustice object to the server
      const apiUrl = 'https://staging.rrdevours.monster/api/injustices';
      this.http.post(apiUrl, injusticeData).subscribe(
        response => {
          this.presentToast('Injustice added successfully');
          this.injusticeAdded.emit(true);
          this.modalController.dismiss();
          // You can close the modal or handle the response further here
        },
        error => {
          this.presentToast('Error adding injustice: ' + error.message);
        }
      );
    });
  }
}
