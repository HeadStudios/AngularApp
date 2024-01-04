import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-photos-third',
  templateUrl: './empty-photos-third.page.html',
  styleUrls: ['./empty-photos-third.page.scss'],
})
export class EmptyPhotosThirdPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
