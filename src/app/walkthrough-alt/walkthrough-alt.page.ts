import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-walkthrough-alt',
  templateUrl: './walkthrough-alt.page.html',
  styleUrls: ['./walkthrough-alt.page.scss'],
})
export class WalkthroughAltPage implements OnInit {
  slideOpts = {
    autoplay: false
  };

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
