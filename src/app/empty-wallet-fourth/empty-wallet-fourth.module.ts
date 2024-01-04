import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyWalletFourthPage } from './empty-wallet-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyWalletFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyWalletFourthPage]
})
export class EmptyWalletFourthPageModule {}
