import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPhotosFirstPage } from './empty-photos-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPhotosFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPhotosFirstPage]
})
export class EmptyPhotosFirstPageModule {}
