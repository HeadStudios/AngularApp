import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-photos-fifth',
  templateUrl: './empty-photos-fifth.page.html',
  styleUrls: ['./empty-photos-fifth.page.scss'],
})
export class EmptyPhotosFifthPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
