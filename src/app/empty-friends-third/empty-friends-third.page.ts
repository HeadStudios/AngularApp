import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-friends-third',
  templateUrl: './empty-friends-third.page.html',
  styleUrls: ['./empty-friends-third.page.scss'],
})
export class EmptyFriendsThirdPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
