import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThumbButtonsListAltPage } from './thumb-buttons-list-alt.page';

const routes: Routes = [
  {
    path: '',
    component: ThumbButtonsListAltPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThumbButtonsListAltPage]
})
export class ThumbButtonsListAltPageModule {}
