import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-videos-fourth',
  templateUrl: './empty-videos-fourth.page.html',
  styleUrls: ['./empty-videos-fourth.page.scss'],
})
export class EmptyVideosFourthPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
