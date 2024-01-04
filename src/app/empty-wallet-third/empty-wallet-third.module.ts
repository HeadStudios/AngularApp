import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyWalletThirdPage } from './empty-wallet-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyWalletThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyWalletThirdPage]
})
export class EmptyWalletThirdPageModule {}
