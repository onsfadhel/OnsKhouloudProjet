import { Component, Input, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Highcharts=Highcharts;
  chartOptions:{};
  @Input() data:any;
  constructor() { 
    this.chartOptions={
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Véhicules DATA'
      },
      colors:['#4794fa',' #ac3973','#d580ff','#ff99ff','#ff8080','#ffa64d','#1affb2',,'#ff8080'],
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      exporting: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {
                name: "Camion",
                y: 40.74,
                drilldown: "Camion"
            },
            {
                name: "Véhicule légère",
                y: 20.57,
                drilldown: "Véhicule légère"
            },
            {
                name: "Tracteur Routier",
                y: 20.23,
                drilldown: "Tracteur Routier"
            },
            {
                name: "Tracteur ",
                y: 10.60,
                drilldown: "Safari"
            },
            {
                name: "Other",
                y: 7.62,
                drilldown: null
            }
        ]
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

  ngOnInit(): void {
    HC_exporting(this.Highcharts);
  }

}
