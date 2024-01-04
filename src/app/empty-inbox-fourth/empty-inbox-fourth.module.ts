import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyInboxFourthPage } from './empty-inbox-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyInboxFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyInboxFourthPage]
})
export class EmptyInboxFourthPageModule {}
