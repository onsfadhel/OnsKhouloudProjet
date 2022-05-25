import { Component, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { StockproduitService } from 'src/app/services/stockproduit.service';
@Component({
  selector: 'app-barchartdash',
  templateUrl: './barchartdash.component.html',
  styleUrls: ['./barchartdash.component.css']
})
export class BarchartdashComponent implements OnInit {
  chartOptions:any;
  Highcharts=Highcharts;
  stockProduits=Array();
  quantiteproduits=Array();
  produits=Array();
  constructor(private stockservice: StockproduitService) {
    var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
    data = JSON.parse(data);
    this.stockservice.getStock().subscribe((data:any)=>{
      this.stockProduits=data;
      const result = [...this.stockProduits.reduce((r, o) => {
        const key = o.categorie ;
         
        const item = r.get(key) || Object.assign({}, o, {
          quantite:0,
          
        });
        item.quantite +=o.entre
        
        
        return r.set(key, item);
      }, new Map).values()];
      
      result.forEach((i:any)=>{
        this.produits.push(i.categorie);
        this.quantiteproduits.push(i.quantite)

      })
      console.log(this.produits);
      console.log(this.quantiteproduits);

      this.chartOptions={
        chart: {
          type: 'column'
      },
      title: {
          text: 'Production annuel'
      },
      colors:['#10815A','#35B549','#17A87A','#35A1B5','#4775D1','#4935B5','#8935B5','#B535AF',,'#B5356F'],
      subtitle: {
          text: 'Quantité de production pour chaque catégorie produit'
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          title: {
             text: 'Catégorie de produit'
      },
         categories: this.produits,
      },
      yAxis: {
          title: {
              text: 'Quantité de produit'
          }
  
      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
              dataLabels: {
                  enabled: true,
                  
                  
              }
          }
      },
  
      tooltip: {
          headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
         
      },
  
      series: [
          {
              name: "quantite produit",
              colorByPoint: true,
              data: this.quantiteproduits
          }
      ],
      drilldown: {
          breadcrumbs: {
              position: {
                  align: 'right'
              }
          },
          
      }
      }

    })

    
    HC_exporting(Highcharts);
            setTimeout(()=>{
              window.dispatchEvent(
                new Event('resize')
              );
            },300);
   }

  ngOnInit(): void {
  }


}
