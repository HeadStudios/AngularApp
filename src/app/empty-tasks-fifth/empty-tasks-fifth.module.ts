import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyTasksFifthPage } from './empty-tasks-fifth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyTasksFifthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyTasksFifthPage]
})
export class EmptyTasksFifthPageModule {}
