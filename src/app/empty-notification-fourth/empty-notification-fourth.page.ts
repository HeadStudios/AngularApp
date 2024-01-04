import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-notification-fourth',
  templateUrl: './empty-notification-fourth.page.html',
  styleUrls: ['./empty-notification-fourth.page.scss'],
})
export class EmptyNotificationFourthPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
