import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPhotosFourthPage } from './empty-photos-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPhotosFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPhotosFourthPage]
})
export class EmptyPhotosFourthPageModule {}
