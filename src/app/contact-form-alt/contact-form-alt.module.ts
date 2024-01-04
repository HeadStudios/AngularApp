import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactFormAltPage } from './contact-form-alt.page';

const routes: Routes = [
  {
    path: '',
    component: ContactFormAltPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactFormAltPage]
})
export class ContactFormAltPageModule {}
