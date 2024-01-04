import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyEventsFifthPage } from './empty-events-fifth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyEventsFifthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyEventsFifthPage]
})
export class EmptyEventsFifthPageModule {}
