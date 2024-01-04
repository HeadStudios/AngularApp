import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details-second',
  templateUrl: './product-details-second.page.html',
  styleUrls: ['./product-details-second.page.scss'],
})
export class ProductDetailsSecondPage implements OnInit {

  slideOpts = {
    autoplay: false
  };

  public productColors = [];
  public sanitizer: DomSanitizer;

  constructor(private domSanitizer: DomSanitizer) {
    this.sanitizer = this.domSanitizer;
  }

  ngOnInit() {
    this.productColors = [
      {
        name: 'white',
        selected: false,
        selectedContrast: 'black'
      },
      {
        name: 'brown',
        selected: false,
        selectedContrast: 'white'
      },
      {
        name: 'blue',
        selected: true,
        selectedContrast: 'white'
      },
      {
        name: 'black',
        selected: false,
        selectedContrast: 'white'
      }
    ];
  }

  toggleSelectedColor(index) {
    this.productColors.forEach( (item, i) => {
      if (i === index) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
    });
  }

}
