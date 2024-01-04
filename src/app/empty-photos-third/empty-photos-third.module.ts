import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPhotosThirdPage } from './empty-photos-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPhotosThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPhotosThirdPage]
})
export class EmptyPhotosThirdPageModule {}
