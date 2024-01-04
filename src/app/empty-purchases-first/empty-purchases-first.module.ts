import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPurchasesFirstPage } from './empty-purchases-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPurchasesFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPurchasesFirstPage]
})
export class EmptyPurchasesFirstPageModule {}
