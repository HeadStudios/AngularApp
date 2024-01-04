import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyVideosSecondPage } from './empty-videos-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyVideosSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyVideosSecondPage]
})
export class EmptyVideosSecondPageModule {}
