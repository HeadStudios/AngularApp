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
    
      this.addListeners();
      this.registerNotifications();

    });
  }

  async addListeners() {
    await PushNotifications.addListener('registration', token => {
      console.log(`Push registration success, token: ${token.value}`);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err.error);
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
      this.notificationMessage = notification.body;
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification.actionId, notification.inputValue);
    });
  }

  async registerNotifications() {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      console.error('User denied permissions!');
    } else {
      await PushNotifications.register();
    }
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
