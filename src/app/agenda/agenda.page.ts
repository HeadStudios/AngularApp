import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onIconClick(event) {
    event.stopPropagation();
  }
  goToSessionDetails() {
    this.router.navigate(['session-details']);
  }
}
