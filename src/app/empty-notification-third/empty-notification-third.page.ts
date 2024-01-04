import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-notification-third',
  templateUrl: './empty-notification-third.page.html',
  styleUrls: ['./empty-notification-third.page.scss'],
})
export class EmptyNotificationThirdPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
