import { Component, Input, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { TransactionsService } from 'src/app/services/transactions.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  Highcharts=Highcharts;
  chartOptions:any;
  vehicules=Array();
  types=Array();
  table=Array();
  test=[{name:'',y:''}];
  countvehicules=Array();
  @Input() data:any;
  constructor(private vehiculesservice : TransactionsService , private http:HttpClient){
    var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
    data = JSON.parse(data); 
    
    this.vehiculesservice.getVehicules().subscribe((data:any)=>
    {
        data.forEach((element :any) => {
          this.vehicules.push(element.types)
          this.types.push(element.types);
          /*this.table.forEach((d:any)=>{
            d.name=element.types;
            d.y=50;
            d.drilldown=element.types;
          })*/
        });
        

        //calculer avec group by les types des vehicules 
        const grouptypes = this.groupByVehicule(this.types, (elemen: any) => elemen);
        var listtypes= Object.fromEntries(grouptypes);
        var keytypes=Object.keys(listtypes)
        
        Object.values(listtypes).forEach((i:any)=>{
          var countvehicules =(i.length / this.types.length)*100;
          this.countvehicules.push(countvehicules) 

        });
          for(let i=0;i<keytypes.length;i++){
            var n = keytypes[i];
            var y= this.countvehicules[i];
            var drilldown=keytypes[i];
            var list={name:n,y:y,drilldown:drilldown}
            this.table[i]=list;
          }

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
      colors:['#10815A','#35B549','#17A87A','#35A1B5','#4775D1','#4935B5','#8935B5','#B535AF',,'#B5356F'],
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
        data: this.table
      }]
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  });
}

  ngOnInit(): void {
    HC_exporting(this.Highcharts);
  }

  groupByVehicule(list:any, keyGetter:any) {
    const map = new Map();
    list.forEach((item:any) => {
         const vehicule = keyGetter(item);
         const collection = map.get(vehicule);
         if (!collection) {
             map.set(vehicule, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

}
