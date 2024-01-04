import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-videos-third',
  templateUrl: './empty-videos-third.page.html',
  styleUrls: ['./empty-videos-third.page.scss'],
})
export class EmptyVideosThirdPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
