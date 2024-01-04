import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyTasksFirstPage } from './empty-tasks-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyTasksFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyTasksFirstPage]
})
export class EmptyTasksFirstPageModule {}
