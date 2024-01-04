import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyWalletSecondPage } from './empty-wallet-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyWalletSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyWalletSecondPage]
})
export class EmptyWalletSecondPageModule {}
