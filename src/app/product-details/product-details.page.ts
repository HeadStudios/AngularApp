import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  slideOpts = {
    autoplay: false
  };

  public productSizes = [];
  public productColors = [];
  public sanitizer: DomSanitizer;

  constructor(private domSanitizer: DomSanitizer) {
    this.sanitizer = this.domSanitizer;
  }

  ngOnInit() {
    this.productSizes = [
      {
        label: 'XS',
        selected: false,
        disabled: false
      },
      {
        label: 'S',
        selected: true,
        disabled: false
      },
      {
        label: 'M',
        selected: false,
        disabled: true
      },
      {
        label: 'L',
        selected: false,
        disabled: false
      },
      {
        label: 'XL',
        selected: false,
        disabled: false
      },
      {
        label: 'XXL',
        selected: false,
        disabled: false
      }
    ];

    this.productColors = [
      {
        name: 'white',
        selected: false,
        selectedContrast: 'black'
      },
      {
        name: 'blue',
        selected: true,
        selectedContrast: 'white'
      },
      {
        name: 'yellow',
        selected: false,
        selectedContrast: 'black'
      },
      {
        name: 'black',
        selected: false,
        selectedContrast: 'white'
      }
    ];
  }

  toggleSelectedSize(index) {
    if (this.productSizes[index].disabled) {
      return;
    }

    this.productSizes.forEach( (item, i) => {
      if (i === index) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
    });
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
