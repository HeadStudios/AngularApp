import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductDetailsFourthPage } from './product-details-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailsFourthPage]
})
export class ProductDetailsFourthPageModule {}
