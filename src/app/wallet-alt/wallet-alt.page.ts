import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-alt',
  templateUrl: './wallet-alt.page.html',
  styleUrls: ['./wallet-alt.page.scss'],
})
export class WalletAltPage implements OnInit {

  lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Income' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Expense' }
  ];

  lineChartLabels: Array<any> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  lineChartOptions: any = {
    animation: false,
    responsive: true
  };

  lineChartColors: Array<any> = [
    { // income
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(151,198,107,1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#97C66B',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,0,1)'
    },
    { // expense
      backgroundColor: 'rgba(255,255,255,0)',
      borderColor: 'rgba(255,120,141,1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#FF788D',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0,0,0,1)'
    }
  ];

  lineChartLegend = true;
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
