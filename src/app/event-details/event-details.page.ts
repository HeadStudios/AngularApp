import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastController } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  injusticeId: number;
  injusticeDetails: any = {};
  awsBaseUrl = environment.awsBaseUrl;
  selectedFiles: FileList;
  notes: any[] = [];
  newNoteText: string = '';
  selectedImageUri: string = '';



  constructor(private imagePicker: ImagePicker, private http: HttpClient, private route: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    this.injusticeId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchInjusticeDetails();
    this.fetchNotes();
  }

  openGallery() {
    const options = {
      maximumImagesCount: 1,
      // other options as needed
    };
  
    this.imagePicker.getPictures(options).then((results) => {
      if (results.length > 0) {
        this.selectedImageUri = results[0]; // Store the first selected image URI
        this.presentToast('Image URI: ' + this.selectedImageUri);
        this.uploadSelectedImage();
      } else {
        this.presentToast('No image selected');
      }
    }, (err) => { 
      console.error(err); 
      this.presentToast('Error selecting image: ' + err);
    });
  }

  // Go

  getFileCategory(fileName: string): string {
    const extension = fileName.split('.').pop().toLowerCase();
    if (['png', 'jpg', 'jpeg', 'gif'].includes(extension)) {
      return 'image';
    } else if (['pdf', 'doc', 'docx'].includes(extension)) {
      return 'document';
    } else if (['mp4', 'avi', 'mov'].includes(extension)) {
      return 'video';
    } else {
      return 'other';
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  fetchInjusticeDetails() {
    this.http.get(`https://rrdevours.monster/api/injustices/${this.injusticeId}`)
      .subscribe(data => {
        this.injusticeDetails = data;
      }, error => {
        console.error('Error fetching injustice details!', error);
      });
  }

  fetchNotes() {
    this.http.get(`https://staging.rrdevours.monster/api/injustices/${this.injusticeId}/notes`)
      .subscribe((data: any) => {
        this.notes = data;
      }, error => {
        console.error('Error fetching notes!', error);
      });
  }

  addNote() {
    if (!this.newNoteText.trim()) return;

    const user = JSON.parse(localStorage.getItem('user') || '{}');
    const userId = user.id; // Make sure this is the correct property for the user's ID

    const newNote = {
      text: this.newNoteText,
      notable_id: this.injusticeId,
      notable_type: 'App\\Models\\Injustice', // Make sure this matches your backend model
      system: 0,
      created_by: userId
    };

    this.http.post(`https://staging.rrdevours.monster/api/injustices/${this.injusticeId}/notes`, newNote)
      .subscribe(response => {
        this.notes.push(newNote); // Add the new note to the list
        this.newNoteText = ''; // Clear the input field
        this.presentToast('Note added successfully');
      }, error => {
        console.error('Error adding note!', error);
        this.presentToast('Error adding note');
      });
  }

  hasImages(): boolean {
    return this.injusticeDetails.media.some(item => item.layout === 'image');
  }
  
  hasVideos(): boolean {
    return this.injusticeDetails.media.some(item => item.layout === 'video');
  }
  
  hasDocuments(): boolean {
    return this.injusticeDetails.media.some(item => item.layout === 'document');
  }
  
  getImageMedia() {
    return this.injusticeDetails.media.filter(item => item.layout === 'image');
  }
  
  getVideoMedia() {
    return this.injusticeDetails.media.filter(item => item.layout === 'video');
  }
  
  getDocumentMedia() {
    return this.injusticeDetails.media.filter(item => item.layout === 'document');
  }

  onFileSelected(event) {
    this.selectedFiles = event.target.files;
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

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', this.injusticeId.toString());

    const fileCategory = this.getFileCategory(file.name);
    formData.append('category', fileCategory);

    this.presentToast('Uploading file with name: ' + file.name);

    const uploadUrl = `https://staging.rrdevours.monster/api/injustices/${this.injusticeId}/upload`;

    this.http.post(uploadUrl, formData).subscribe(
      (response: any) => {
        console.log('File uploaded successfully', response);
        const fileUrl = response.url;
        this.presentToast(`File uploaded successfully: ${fileUrl}`);
        this.fetchInjusticeDetails();
      },
      error => {
        console.error('Error uploading file', error);
        this.presentToast('Error uploading file');
      }
    );
  }

  getFileNameFromUrl(url: string): string {
    return url.split('/').pop(); // This will get the part of the URL after the last '/'
  }

  uploadSelectedImage() {
    if (!this.selectedImageUri) {
      this.presentToast('No image selected');
      return;
    }
  
    // Convert the image URI to a Blob or File object
    this.uriToBlob(this.selectedImageUri).then(blob => {
      // Create a File object from the Blob
      const file = new File([blob], 'image.jpg', { type: 'image/jpeg' });
  
      // Call the existing uploadFile method with this File object
      this.uploadFile(file);
    }).catch(err => {
      console.error('Error converting URI to blob', err);
      this.presentToast('Error uploading image: ' + JSON.stringify(err));
    });
  }
  
  uriToBlob(uri: string): Promise<Blob> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = () => {
        this.presentToast('URI converted to blob');
        resolve(xhr.response);
      };
      xhr.onerror = () => {
        this.presentToast('Error converting URI to blob');
        reject(xhr.response);
      };
      xhr.responseType = 'blob';
      xhr.open('GET', uri, true);
      xhr.send();
    });
  }
}
