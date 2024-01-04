import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form-alt',
  templateUrl: './contact-form-alt.page.html',
  styleUrls: ['./contact-form-alt.page.scss'],
})
export class ContactFormAltPage implements OnInit {
  customAlertOptions: any = {
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
