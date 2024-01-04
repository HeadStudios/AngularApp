import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EmptyFriendsFifthPage } from './empty-friends-fifth.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyFriendsFifthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmptyFriendsFifthPage]
})
export class EmptyFriendsFifthPageModule {}
