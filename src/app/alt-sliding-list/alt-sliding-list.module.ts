import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AltSlidingListPage } from './alt-sliding-list.page';

const routes: Routes = [
  {
    path: '',
    component: AltSlidingListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AltSlidingListPage]
})
export class AltSlidingListPageModule {}
