import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListThumbEndPage } from './list-thumb-end.page';

const routes: Routes = [
  {
    path: '',
    component: ListThumbEndPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListThumbEndPage]
})
export class ListThumbEndPageModule {}
