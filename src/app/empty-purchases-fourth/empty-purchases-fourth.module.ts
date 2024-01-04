import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPurchasesFourthPage } from './empty-purchases-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPurchasesFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPurchasesFourthPage]
})
export class EmptyPurchasesFourthPageModule {}
