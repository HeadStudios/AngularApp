import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThumbButtonsListPage } from './thumb-buttons-list.page';

const routes: Routes = [
  {
    path: '',
    component: ThumbButtonsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThumbButtonsListPage]
})
export class ThumbButtonsListPageModule {}
