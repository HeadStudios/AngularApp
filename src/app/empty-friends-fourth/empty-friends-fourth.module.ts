import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyFriendsFourthPage } from './empty-friends-fourth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyFriendsFourthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyFriendsFourthPage]
})
export class EmptyFriendsFourthPageModule {}
