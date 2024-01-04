import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  lineChartData: Array<any> = [
    { data: [1800, -12, 240, 81, 56, 55, 40], label: 'Income/Expense' }
  ];
  lineChartLabels: Array<any> = ['Sep 12', 'Sep 12', 'Sep 12', 'Sep 13', 'Sep 15', 'Oct 2', 'Oct 3'];
  lineChartOptions: any = {
    animation: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          display: true
        }
      ],
      yAxes: [
        {
          display: false
        }
      ]
    }
  };
  lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(119,214,236,1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#61CFE9',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,0,1)'
    }
  ];
  lineChartLegend = false;
  lineChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

}
