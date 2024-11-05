import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {
  Highcharts: typeof Highcharts = Highcharts; // Required for the Highcharts Angular wrapper

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline' // Defines the chart type as a spline chart
    },
    title: {
      text: 'Monthly Income Data'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      plotBands: [{ // Adding plot band to highlight a range in the x-axis
        from: 2, // April (index-based, so 0 = January, 1 = February, etc.)
        to: 4,   // May
        color: 'rgba(68, 170, 213, .2)', // Light blue color with transparency
        label: {
          text: 'Sales Peak Season',
          style: {
            color: '#606060'
          }
        }
      }]
    },
    yAxis: {
      title: {
        text: 'Sales (in units)'
      },
      plotBands: [{ // Optional: Adding plot band to highlight a range in the y-axis
        from: 200,
        to: 250,
        color: 'rgba(68, 170, 213, .1)',
        label: {
          text: 'Target Sales Range',
          style: {
            color: '#606060'
          }
        }
      }]
    },
    series: [
      {
        type: 'spline',
        name: 'Sales',
        data: [150, 200, 180, 220, 170, 210, 240]
      }
    ]
  };
}
