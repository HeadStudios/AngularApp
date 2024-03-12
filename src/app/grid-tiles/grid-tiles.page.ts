import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { AddInjusticeModalComponent } from '../add-injustice-modal/add-injustice-modal.component';
import OneSignal from 'onesignal-cordova-plugin';

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
      this.initializeOneSignal();
    });
  }

  initializeOneSignal() {
    // Remove this method to stop OneSignal Debugging
    //OneSignal.Debug.setLogLevel(6);
    
    // Replace YOUR_ONESIGNAL_APP_ID with your OneSignal App ID
    OneSignal.initialize("9b4c7fc8-5490-440f-9d6c-5bf708ea28d9");

    OneSignal.Notifications.addEventListener('click', async (e) => {
      let clickData = await e.notification;
      console.log("Notification Clicked : " + clickData);
      // Update UI or perform actions based on notification click
      this.notificationMessage = `Clicked: ${JSON.stringify(clickData)}`;
    });

    OneSignal.Notifications.requestPermission(true).then((success: Boolean) => {
      console.log("Notification permission granted " + success);
      // You might want to update the UI or internal state to reflect this
    });
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
