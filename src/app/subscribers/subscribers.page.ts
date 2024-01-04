import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.page.html',
  styleUrls: ['./subscribers.page.scss'],
})
export class SubscribersPage implements OnInit {

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {
  }

  async presentMenu(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
