import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router from @angular/router
import { ModalController } from '@ionic/angular'; // Import ModalController from @ionic/angular
import { AddInjusticeModalComponent } from '../add-injustice-modal/add-injustice-modal.component';


@Component({
  selector: 'app-grid-tiles',
  templateUrl: './grid-tiles.page.html',
  styleUrls: ['./grid-tiles.page.scss'],
})
export class GridTilesPage implements OnInit {

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
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
