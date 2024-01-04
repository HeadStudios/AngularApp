import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyEventsSecondPage } from './empty-events-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyEventsSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyEventsSecondPage]
})
export class EmptyEventsSecondPageModule {}
