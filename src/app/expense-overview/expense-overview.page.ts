import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.page.html',
  styleUrls: ['./expense-overview.page.scss'],
})
export class ExpenseOverviewPage implements OnInit {

  public isShown = [];
  public items: any[];

  doughnutChartLabels: string[] = ['Food', 'Electronics', 'Movies', 'Games'];
  doughnutChartData: number[] = [570.05, 480.90, 163, 400.75];
  doughnutChartType = 'doughnut';

  doughnutChartOptions: any = {
    circumference: Math.PI,
    rotation: 0.5 * Math.PI,
    responsive: true,
    maintainAspectRatio: false
  };
  doughnutChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(151,198,107,1)',
        'rgba(255,221,125,1)',
        'rgba(97,207,233,1)',
        'rgba(255,137,192,1)'
      ]
    }
  ];
  doughnutChartLegend = false;

  constructor() {
    this.items = [
      {
        divider: {
          title: 'Movies',
          percentage: '10%',
          amount: '$16'
        },
        subitems: [
          {
            title: 'The Perfect Movie 3D',
            description: '02:11 PM  •  April 4, 2017',
            amount: '$16'
          }
        ]
      },
      {
        divider: {
          title: 'Electronics',
          percentage: '30%',
          amount: '$480.90'
        },
        subitems: [
          {
            title: 'Apple Earpods',
            description: '02:11 PM  •  April 4, 2017',
            amount: '$360'
          },
          {
            title: 'Duracell Batteries AAA, 6 pcs ',
            description: '03:56 PM  •  April 4, 2017',
            amount: '$120.90'
          }
        ]
      }
    ];
    this.isShown[0] = true;
  }

  ngOnInit() {
  }

  itemTapped(index) {
    this.isShown[index] = !this.isShown[index];
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
