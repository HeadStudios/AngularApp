import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyFriendsThirdPage } from './empty-friends-third.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyFriendsThirdPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyFriendsThirdPage]
})
export class EmptyFriendsThirdPageModule {}
