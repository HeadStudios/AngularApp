import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddInjusticeModalComponent } from '../add-injustice-modal/add-injustice-modal.component';
import { PushNotifications, Token, PushNotificationSchema, ActionPerformed } from '@capacitor/push-notifications';
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
      this.registerNotifications();
    });
  }

  async registerNotifications() {
    const permStatus = await PushNotifications.requestPermissions();

    if (permStatus.receive === 'granted') {
      await PushNotifications.register();

      PushNotifications.addListener('registration',
        (token: Token) => {
          alert('Push registration success, token: ' + token.value);
        }
      );

      PushNotifications.addListener('registrationError',
        (error: any) => {
          alert('Error on registration: ' + JSON.stringify(error));
        }
      );

      PushNotifications.addListener('pushNotificationReceived',
        (notification: PushNotificationSchema) => {
          alert('Push received: ' + JSON.stringify(notification));
          this.notificationMessage = notification.body; // Optionally update UI
        }
      );

      PushNotifications.addListener('pushNotificationActionPerformed',
        (notification: ActionPerformed) => {
          alert('Push action performed: ' + JSON.stringify(notification));
        }
      );

    } else {
      console.error('User denied permissions!');
    }
  }

  async openAddInjustice() {
    const modal = await this.modalController.create({
      component: AddInjusticeModalComponent,
      componentProps: { contactId: 4074 }
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
