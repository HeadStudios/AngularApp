import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';





@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.page.html',
  styleUrls: ['./basic-list.page.scss'],
})
export class BasicListPage implements OnInit {

  items: any[] = []; 
  filteredItems: any[] = []; // This will hold the filtered items
  searchQuery: string = '';

  constructor(private http: HttpClient, private router: Router, private menuCtrl: MenuController, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
    this.fetchContacts();
    this.changeDetectorRef.detectChanges();
  }

  fetchContacts() {
    this.http.get<any[]>('https://rrdevours.monster/api/contacts').subscribe(
      data => {
        this.items = data; // Assuming the response is an array
        this.filterItems();
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  openSpeakerDetails(contactId: number) {
    this.router.navigate(['/speaker-details', { id: contactId }]);
  }

  filterItems() {
    this.filteredItems = this.searchQuery ? this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())) : this.items;
  }

}
