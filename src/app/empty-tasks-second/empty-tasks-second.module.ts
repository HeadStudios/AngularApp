import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyTasksSecondPage } from './empty-tasks-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyTasksSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyTasksSecondPage]
})
export class EmptyTasksSecondPageModule {}
