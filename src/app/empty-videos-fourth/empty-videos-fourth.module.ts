import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyVideosFourthPage } from './empty-videos-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyVideosFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyVideosFourthPage]
})
export class EmptyVideosFourthPageModule {}
