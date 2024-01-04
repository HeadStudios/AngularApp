import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyWalletFirstPage } from './empty-wallet-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyWalletFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyWalletFirstPage]
})
export class EmptyWalletFirstPageModule {}
