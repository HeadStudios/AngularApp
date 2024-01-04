import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyFriendsFirstPage } from './empty-friends-first.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyFriendsFirstPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyFriendsFirstPage]
})
export class EmptyFriendsFirstPageModule {}
