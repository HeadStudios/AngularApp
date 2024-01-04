import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyNotificationSecondPage } from './empty-notification-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyNotificationSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyNotificationSecondPage]
})
export class EmptyNotificationSecondPageModule {}
