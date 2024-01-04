import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyWalletFifthPage } from './empty-wallet-fifth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyWalletFifthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyWalletFifthPage]
})
export class EmptyWalletFifthPageModule {}
