import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyNotificationFourthPage } from './empty-notification-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyNotificationFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyNotificationFourthPage]
})
export class EmptyNotificationFourthPageModule {}
