import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlternativeProfilePage } from './alternative-profile.page';

const routes: Routes = [
  {
    path: '',
    component: AlternativeProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlternativeProfilePage]
})
export class AlternativeProfilePageModule {}
