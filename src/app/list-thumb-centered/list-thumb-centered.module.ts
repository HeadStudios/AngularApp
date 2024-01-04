import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListThumbCenteredPage } from './list-thumb-centered.page';

const routes: Routes = [
  {
    path: '',
    component: ListThumbCenteredPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListThumbCenteredPage]
})
export class ListThumbCenteredPageModule {}
