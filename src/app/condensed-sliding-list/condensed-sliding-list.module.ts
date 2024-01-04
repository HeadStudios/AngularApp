import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CondensedSlidingListPage } from './condensed-sliding-list.page';

const routes: Routes = [
  {
    path: '',
    component: CondensedSlidingListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CondensedSlidingListPage]
})
export class CondensedSlidingListPageModule {}
