import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyNotificationFirstPage } from './empty-notification-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyNotificationFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyNotificationFirstPage]
})
export class EmptyNotificationFirstPageModule {}
