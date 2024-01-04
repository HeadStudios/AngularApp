import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdowns',
  templateUrl: './dropdowns.page.html',
  styleUrls: ['./dropdowns.page.scss'],
})
export class DropdownsPage implements OnInit {
  customAlertOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color',
    translucent: true,
    cssClass: 'is-select'
  };

  customPopoverOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    cssClass: 'is-select'
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color',
    cssClass: 'is-select'
  };

  constructor() { }

  ngOnInit() {
  }

}
