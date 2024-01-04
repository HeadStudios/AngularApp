import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPurchasesThirdPage } from './empty-purchases-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPurchasesThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPurchasesThirdPage]
})
export class EmptyPurchasesThirdPageModule {}
