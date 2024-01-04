import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyInboxThirdPage } from './empty-inbox-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyInboxThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyInboxThirdPage]
})
export class EmptyInboxThirdPageModule {}
