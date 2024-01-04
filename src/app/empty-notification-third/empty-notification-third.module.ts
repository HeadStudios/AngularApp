import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyNotificationThirdPage } from './empty-notification-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyNotificationThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyNotificationThirdPage]
})
export class EmptyNotificationThirdPageModule {}
