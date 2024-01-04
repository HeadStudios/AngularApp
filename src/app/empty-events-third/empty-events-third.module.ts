import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyEventsThirdPage } from './empty-events-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyEventsThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyEventsThirdPage]
})
export class EmptyEventsThirdPageModule {}
