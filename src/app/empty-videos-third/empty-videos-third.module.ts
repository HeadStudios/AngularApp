import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyVideosThirdPage } from './empty-videos-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyVideosThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyVideosThirdPage]
})
export class EmptyVideosThirdPageModule {}
