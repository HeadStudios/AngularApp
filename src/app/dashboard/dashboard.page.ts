import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  lineChartData: Array<any> = [
    { data: [1065, 1059, 480, 881, 656, 955, 1444], label: 'UI Design' },
    { data: [1028, 648, 1040, 1742, 686, 1027, 1091], label: 'Mobile Template' },
    { data: [18, 48, 77, 99, 100, 456, 340], label: 'Table Templates' }
  ];
  lineChartLabels: Array<any> = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
  lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(97,207,233,0.5)',
      borderColor: 'rgba(97,207,233,1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#61CFE9'
    },
    {
      backgroundColor: 'rgba(151,198,107,0.5)',
      borderColor: 'rgba(151,198,107,1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#97C66B'
    },
    {
      backgroundColor: 'rgba(255,221,125,0.5)',
      borderColor: 'rgba(255,221,125,1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#FFDD7D'
    }
  ];
  lineChartLegend = true;
  lineChartType = 'line';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any>('https://staging.rrdevours.monster/api/touchpoints/count')
      .subscribe(response => {
        const rawData = response;
        const categories = Object.keys(rawData);
        const allDates = [];
  
        // Extract all unique dates from the data
        categories.forEach(category => {
          rawData[category].forEach(item => {
            if (!allDates.includes(item.date)) {
              allDates.push(item.date);
            }
          });
        });
  
        // Sort dates
        allDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  
        // Prepare chart data
        const chartData = categories.map(category => {
          const dataForCategory = new Array(allDates.length).fill(0);
          rawData[category].forEach(item => {
            const index = allDates.indexOf(item.date);
            if (index !== -1) {
              dataForCategory[index] = item.count;
            }
          });
          return { data: dataForCategory, label: category };
        });
  
        // Update component properties
        this.lineChartData = chartData;
        this.lineChartLabels = allDates.map(date => new Date(date).toLocaleDateString());
      }, error => {
        console.error('There was an error!', error);
      });
  }

  // events
  chartClicked(e: any): void {
    console.log(e);
  }

  chartHovered(e: any): void {
    console.log(e);
  }

}
