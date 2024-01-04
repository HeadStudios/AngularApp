import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChartsModule } from 'ng2-charts';
import '../../../node_modules/chart.js/dist/Chart.bundle.min.js';

import { ExpenseOverviewPage } from './expense-overview.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseOverviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsModule
  ],
  declarations: [ExpenseOverviewPage]
})
export class ExpenseOverviewPageModule {}
