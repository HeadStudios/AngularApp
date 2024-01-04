import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyEventsFirstPage } from './empty-events-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyEventsFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyEventsFirstPage]
})
export class EmptyEventsFirstPageModule {}
