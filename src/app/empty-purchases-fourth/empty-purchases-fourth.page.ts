import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-purchases-fourth',
  templateUrl: './empty-purchases-fourth.page.html',
  styleUrls: ['./empty-purchases-fourth.page.scss'],
})
export class EmptyPurchasesFourthPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
