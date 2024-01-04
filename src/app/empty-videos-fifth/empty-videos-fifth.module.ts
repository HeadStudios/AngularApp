import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyVideosFifthPage } from './empty-videos-fifth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyVideosFifthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyVideosFifthPage]
})
export class EmptyVideosFifthPageModule {}
