import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsThirdPage } from './product-details-third.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailsThirdPage]
})
export class ProductDetailsThirdPageModule {}
