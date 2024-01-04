import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyFriendsSecondPage } from './empty-friends-second.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyFriendsSecondPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyFriendsSecondPage]
})
export class EmptyFriendsSecondPageModule {}
