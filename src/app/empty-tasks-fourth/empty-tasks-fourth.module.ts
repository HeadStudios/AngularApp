import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyTasksFourthPage } from './empty-tasks-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyTasksFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyTasksFourthPage]
})
export class EmptyTasksFourthPageModule {}
