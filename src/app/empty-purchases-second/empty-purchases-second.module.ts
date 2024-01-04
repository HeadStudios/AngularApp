import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPurchasesSecondPage } from './empty-purchases-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPurchasesSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPurchasesSecondPage]
})
export class EmptyPurchasesSecondPageModule {}
