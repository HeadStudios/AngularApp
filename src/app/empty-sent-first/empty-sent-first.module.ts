import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptySentFirstPage } from './empty-sent-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptySentFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptySentFirstPage]
})
export class EmptySentFirstPageModule {}
