import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-organization-modal',
  templateUrl: './search-organization-modal.component.html',
  styleUrls: ['./search-organization-modal.component.scss'],
})
export class SearchOrganizationModalComponent implements OnInit {

  organizations = [];
  searchTerm = '';

  constructor(private modalCtrl: ModalController,
    private http: HttpClient) { }

  ngOnInit() {}

  onSearchChanged() {
    // Ensure the searchTerm is URL encoded to handle spaces and special characters
    const encodedSearchTerm = encodeURIComponent(this.searchTerm);
    console.log("Chaning and manging");
    this.http.get(`https://rrdevours.monster/api/organisations/search?query=${encodedSearchTerm}`)
      .subscribe((results: any) => {
        // Assuming results are returned in a directly usable format
        this.organizations = results;
      }, error => {
        console.error('Search error:', error);
      });
  }

  selectOrganization(organizationId: number) {
    this.modalCtrl.dismiss({
      organizationId: organizationId
    });
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
