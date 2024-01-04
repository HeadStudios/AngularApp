import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WalkthroughSliderPage } from './walkthrough-slider.page';

const routes: Routes = [
  {
    path: '',
    component: WalkthroughSliderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WalkthroughSliderPage]
})
export class WalkthroughSliderPageModule {}
