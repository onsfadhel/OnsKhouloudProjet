import { Component, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { ProduitsService } from 'src/app/services/produits.service';
import { StockproduitService } from 'src/app/services/stockproduit.service';
@Component({
  selector: 'app-stackedarea',
  templateUrl: './stackedarea.component.html',
  styleUrls: ['./stackedarea.component.css']
})
export class StackedareaComponent implements OnInit {
  chartOptions:any;
  Highcharts=Highcharts;
  mois=Array();
  products=Array();
  categories=Array();
  table=Array();
  months=Array();
  quantites=Array();
  constructor(private produitsservices: StockproduitService) { 
    var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
    data = JSON.parse(data); 
    
    this.produitsservices.getStock().subscribe((data:any)=>{
        data.forEach((element: any)=>{
            this.mois.push(element.mois);
        });
        const groupmonth= this.groupBymois(this.mois,(elemen: any) => elemen);
        var listmois= Object.fromEntries(groupmonth);
        var keymois=Object.keys(listmois);
        this.products=data;
        this.products= this.products.sort((a, b) => a.mois - b.mois);
        const result = [...this.products.reduce((r, o) => {
            const key = o.categorie ;
             
            const item = r.get(key) || Object.assign({}, o, {
              entre:Array(),
              
            });
            
            item.entre.push(parseInt(o.entre));
            
            return r.set(key, item);
          }, new Map).values()];
          
          console.log('result',result);
        result.forEach((j:any)=>{
            this.categories.push(j.categorie);
            this.months.push(j.mois);
            this.quantites.push(j.entre);


        });
        for(let i=0;i<this.categories.length;i++){
            var c=this.categories[i];
            var m=this.months[i];
            var q=this.quantites[i];
            var l={name:c, data:q};
            this.table.push(l);

        }
        console.log('testcat',this.table)

    
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Dashboard Production'
      },
      colors:['#10815A','#4775D1','#17A87A','#35A1B5','#B5356F','#35A1B5','#4775D1','#4935B5','#8935B5'],
      subtitle: {
          text: 'Stock des sous-produits'
      },
      xAxis: {
          categories: keymois,
          tickmarkPlacement: 'on',
          title: {
              text:'Mois' 
          }
      },
      yAxis: {
          title: {
              text: 'Quantité de production par mois'
          },
       
          
      },
      tooltip: {
          split: true,
        
      },
      plotOptions: {
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series:this.table
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  },300);
  console.log(keymois);
});
  }

  ngOnInit(): void {
  }
  groupBymois(list:any, keyGetter:any) {
    const map = new Map();
    list.forEach((item:any) => {
         const mois = keyGetter(item);
         const collection = map.get(mois);
         if (!collection) {
             map.set(mois, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}
groupByProducts(list:any,keyGetter:any){
    const map = new Map();
    list.forEach((item:any) => {
         const produit = keyGetter(item);
         const collection = map.get(produit);
         if (!collection) {
             map.set(produit, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;

}

}
