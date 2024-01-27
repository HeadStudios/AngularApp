import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AddInjusticeModalComponent } from '../add-injustice-modal/add-injustice-modal.component';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.page.html',
  styleUrls: ['./speaker-details.page.scss'],
})
export class SpeakerDetailsPage implements OnInit {

  contactId: number;
  contactData: any;
  images: any[] = [];
  videos: any[] = [];
  documents: any[] = [];
  injustices: any[] = [];


  slideOpts = {
    autoplay: true
  };

  constructor(private router: Router, private route: ActivatedRoute, 
    private http: HttpClient, private modalController: ModalController, private toastController: ToastController) { }
 
  ngOnInit() {
    if (this.route.snapshot.paramMap.has('id')) {
      this.contactId = Number(this.route.snapshot.paramMap.get('id'));
      this.fetchContactDetails(this.contactId);
    } else {
      // Handle the case where no name is passed
      // For example, set a default name or leave it blank
      //this.name = 'Default Name'; // or some other default logic
    }
  }

  fetchContactDetails(contactId: number) {
    this.http.get(`https://staging.rrdevours.monster/api/contact/${contactId}`).subscribe(
      data => {
        this.contactData = data;
        this.injustices = this.contactData.injustices; // Store injustices
        // You can remove or comment out the groupMediaElements call if it's no longer needed
        // this.groupMediaElements();
      },
      error => {
        console.error('Error fetching contact details!', error);
      }
    );
  }

  groupMediaElements() {
    const baseUrl = environment.awsBaseUrl;

    if (this.contactData && this.contactData.media_elements) {
      this.images = this.contactData.media_elements.filter(el => el.layout === 'image').map(el => {
      return { ...el, attributes: { image: baseUrl + el.attributes.image }};
    });
      this.videos = this.contactData.media_elements.filter(el => el.layout === 'video');
      this.documents = this.contactData.media_elements.filter(el => el.layout === 'document');
    }
  }

  onIconClick(event) {
    event.stopPropagation();
  }
  goToSessionDetails() {
    this.router.navigate(['session-details']);
  }
 
  openMediaDetails(url: string) {
    const fileType = url.split('.').pop();

    const fullUrl = environment.awsBaseUrl + url;

    if (fileType === 'mp4') {
      // Navigate to video player with the full AWS URL
      this.router.navigate(['/product-details-fourth', { mediaUrl: fullUrl }]);
    } else if (fileType === 'jpg' || fileType === 'png') {
      // Navigate to image viewer with the full AWS URL
      this.router.navigate(['/product-details-fourth', { mediaUrl: fullUrl }]);
    } else {
      // Open documents in a new tab with the full AWS URL
      window.open(fullUrl, '_blank');
    }
    this.router.navigate(['/product-details-fourth', { mediaUrl: fullUrl }]);
  }

  getImageFilename(url: string): string {
    return url.split('/').pop(); // Extracts the filename from the URL
  }

  goToInjusticeDetails(injusticeId: number) {
    this.router.navigate(['/eventDetails', injusticeId]);
  }

  getFileNameFromUrl(url: string): string {
    return url.split('/').pop(); // Extracts the filename from the URL
  }

  async openAddInjusticeModal() {
    const modal = await this.modalController.create({
    component: AddInjusticeModalComponent,
    componentProps: {
      contactId: this.contactId  // Pass the current contactId
    }
  });

  modal.onDidDismiss().then((dataReturned) => {
    if (dataReturned.data === true) { // Check if injustice was added
      this.fetchContactDetails(this.contactId); // Refetch injustices
    }
  });

  return await modal.present();
  }

  addInjustice(injusticeData: any) {
    const apiUrl = 'https://staging.rrdevours.monster/api/injustices';
  
    this.http.post(apiUrl, injusticeData).subscribe(
      response => {
        console.log('Injustice added:', response);
        // Update your local data or refresh the list, if needed
      },
      error => {
        console.error('Error adding injustice:', error);
      }
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    }); // hello
    toast.present();
  }

  sendSMS(mobileNumber: string) {
    if (mobileNumber) {
      // You can use a plugin to open the SMS app with the number pre-filled
      window.open(`sms:${mobileNumber}`, '_system');
    }
  }

  makeCall(mobileNumber: string) {
    if (mobileNumber) {
      // Use the 'tel' scheme to initiate a call
      window.open(`tel:${mobileNumber}`, '_system');
    }
  }

}
