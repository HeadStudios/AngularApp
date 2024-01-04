import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyPurchasesFifthPage } from './empty-purchases-fifth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyPurchasesFifthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyPurchasesFifthPage]
})
export class EmptyPurchasesFifthPageModule {}
