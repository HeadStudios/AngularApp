import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-wallet-third',
  templateUrl: './empty-wallet-third.page.html',
  styleUrls: ['./empty-wallet-third.page.scss'],
})
export class EmptyWalletThirdPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
