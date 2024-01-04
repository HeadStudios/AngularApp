import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyTasksThirdPage } from './empty-tasks-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyTasksThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyTasksThirdPage]
})
export class EmptyTasksThirdPageModule {}
