import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {

  public isShown = [];
  public items: any[];

  constructor() {
    this.items = [
      {
        title: 'Playstation Network',
        category: 'is-item-category-danger',
        icon: 'arrow-up',
        date: '01:24 PM  •  September 12, 2016',
        amount: '- $12',
        transaction: '982921938948222',
        profileId: '3488892',
        email: 'chris@gmail.com'
      },
      {
        title: 'Tomas Myers',
        category: 'is-item-category-success',
        icon: 'arrow-down',
        date: '04:19 PM  •  September 12, 2016',
        amount: '+ $1800',
        transaction: '881121938948333',
        profileId: '4488401',
        email: 'thomas.39@gmail.com'
      },
      {
        title: 'Gumroad Inc.',
        category: 'is-item-category-success',
        icon: 'arrow-down',
        date: '08:40 PM  •  September 12, 2016',
        amount: '+ $240',
        transaction: '715921938967344',
        profileId: '6488819',
        email: 'sophia@gmail.com'
      },
      {
        title: 'Starbucks',
        category: 'is-item-category-danger',
        icon: 'arrow-up',
        date: '01:24 PM  •  August 26, 2016',
        amount: '- $24',
        transaction: '624810827703283',
        profileId: '4355150',
        email: 'jake@gmail.com'
      },
      {
        title: 'CreativeMarket',
        category: 'is-item-category-success',
        icon: 'arrow-down',
        date: '02:40 PM  •  August 24, 2016',
        amount: '+ $850',
        transaction: '256268857395641',
        profileId: '97348406',
        email: 'emily@gmail.com'
      },
      {
        title: 'Desk Purchase',
        category: 'is-item-category-danger',
        icon: 'arrow-up',
        date: '08:40 PM  •  August 24, 2016',
        amount: '- $220',
        transaction: '8364788573092901',
        profileId: '08627856',
        email: 'olivia@gmail.com'
      }
    ];
    this.isShown[0] = true;
  }

  ngOnInit() {
  }

  itemTapped(index) {
    this.isShown[index] = !this.isShown[index];
  }

}
