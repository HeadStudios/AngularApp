import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.page.html',
  styleUrls: ['./icon-list.page.scss'],
})
export class IconListPage implements OnInit {
  recentNotes: any[] = [];
  latestInjustices: any[] = [];
  private apiUrl = 'https://staging.rrdevours.monster/api'; // API base URL

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.getRecentNotes().subscribe(
      data => {
        this.recentNotes = data;
      },
      error => {
        console.error('Error fetching recent notes', error);
      }
    );

    this.getLatestInjustices().subscribe(
      data => {
        this.latestInjustices = data;
      },
      error => {
        console.error('Error fetching latest injustices', error);
      }
    );
  }

  

  getRecentNotes() {
    return this.http.get<any[]>(`${this.apiUrl}/recent-notes`);
  }

  getLatestInjustices() {
    return this.http.get<any[]>(`${this.apiUrl}/latest-injustices`);
  }

  goToInjusticeDetails(injusticeId: number) {
    if (injusticeId) {
      this.router.navigate(['/eventDetails', injusticeId]);
    } else {
      console.error('Injustice ID is null or undefined');
      // Optionally, handle the situation where the injustice ID is not available
    }
  }
}
