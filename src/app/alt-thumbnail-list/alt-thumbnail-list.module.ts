import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AltThumbnailListPage } from './alt-thumbnail-list.page';

const routes: Routes = [
  {
    path: '',
    component: AltThumbnailListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AltThumbnailListPage]
})
export class AltThumbnailListPageModule {}
