import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from @angular/router
import { ModalController } from '@ionic/angular'; // Import ModalController from @ionic/angular
import { AddInjusticeModalComponent } from '../add-injustice-modal/add-injustice-modal.component';
import { PushNotifications } from '@capacitor/push-notifications'; // Import PushNotifications
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-grid-tiles',
  templateUrl: './grid-tiles.page.html',
  styleUrls: ['./grid-tiles.page.scss'],
})
export class GridTilesPage implements OnInit {

  notificationMessage: string = '';

  constructor(private router: Router, private modalController: ModalController, private platform: Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.initializePushNotifications();
    });
  }

  initializePushNotifications() {
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
        // Handle user denying permissions
        console.log('User denied permissions to receive push notifications');
      }
    });
  
    PushNotifications.addListener('registration', 
      (token) => {
        console.log(`Push registration success, token: ${token.value}`);
        // You can also optionally send the token to your server here if you wish to send push notifications from there
      }
    );
  
    PushNotifications.addListener('pushNotificationReceived', 
      (notification) => {
        this.notificationMessage = notification.body;
        console.log('Push received: ', notification);
      }
    );
  
    PushNotifications.addListener('pushNotificationActionPerformed', 
      (notification) => {
        console.log('Push action performed: ', notification);
      }
    );
  }

  async openAddInjustice() {
    const modal = await this.modalController.create({
      component: AddInjusticeModalComponent,
      componentProps: {
        contactId: 4074 
      }
    });
  
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
    if (data && data.injusticeId) {
      this.goToInjusticeDetails(data.injusticeId);
    }
  }

  goToInjusticeDetails(injusticeId: number) {
    this.router.navigate(['/eventDetails', injusticeId]);
  }

}
