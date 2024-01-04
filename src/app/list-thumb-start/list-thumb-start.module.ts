import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListThumbStartPage } from './list-thumb-start.page';

const routes: Routes = [
  {
    path: '',
    component: ListThumbStartPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListThumbStartPage]
})
export class ListThumbStartPageModule {}
