import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScheduleMonthPage } from './schedule-month.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleMonthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ScheduleMonthPage]
})
export class ScheduleMonthPageModule {}
