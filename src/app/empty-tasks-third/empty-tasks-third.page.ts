import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-empty-tasks-third',
  templateUrl: './empty-tasks-third.page.html',
  styleUrls: ['./empty-tasks-third.page.scss'],
})
export class EmptyTasksThirdPage implements OnInit {

  env = environment;

  constructor() { }

  ngOnInit() {
  }

}
