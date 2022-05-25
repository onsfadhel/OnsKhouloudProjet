import { Component, Input ,OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { TransactionsService } from 'src/app/services/transactions.service';
import { HttpClient } from '@angular/common/http';
import { ProduitsService } from 'src/app/services/produits.service';
@Component({
  selector: 'app-piechartfinancier',
  templateUrl: './piechartfinancier.component.html',
  styleUrls: ['./piechartfinancier.component.css']
})
export class PiechartfinancierComponent implements OnInit {
  Highcharts=Highcharts;
  chartOptions:any;
  ventesproduits=Array();
  produits=Array();
  table=Array();
  test=[{name:'',y:''}];
  quantiteproduits=Array();
  @Input() data:any;
  constructor(private produitsservices: ProduitsService , private http:HttpClient){
    var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
    data = JSON.parse(data); 
    
    this.produitsservices.getProductsSell().subscribe((data:any)=>
    {
      this.ventesproduits=data;  
      const result = [...this.ventesproduits.reduce((r, o) => {
        const key = o.categorie ;
         
        const item = r.get(key) || Object.assign({}, o, {
          quantite:0,
          
        });
        item.quantite +=parseInt(o.quantite)
        
        
        return r.set(key, item);
      }, new Map).values()];
      let s=0;
      data.forEach((i:any)=>{
          s=s+parseInt(i.quantite);
        })
      result.forEach((i:any)=>{
        this.produits.push(i.categorie);
        this.quantiteproduits.push(parseInt(i.quantite))
        var list={name:i.categorie,y:(parseInt(i.quantite)/s)*100}
        this.table.push(list)
        
      })
      console.log('table',this.table)
    

    this.chartOptions={
        chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Ventes anunuel des produits'
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
