import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyInboxSecondPage } from './empty-inbox-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyInboxSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyInboxSecondPage]
})
export class EmptyInboxSecondPageModule {}
