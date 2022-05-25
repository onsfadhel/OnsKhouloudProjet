import { Component, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { TransactionsService } from 'src/app/services/transactions.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  chartOptions:any;
  Highcharts=Highcharts;
  transactions=Array();
  counttransaction=Array();
  adresses=Array();

  constructor(private transactionsservice : TransactionsService , private http:HttpClient) {
    var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
    data = JSON.parse(data);

        this.transactionsservice.gettransactions().subscribe((data:any)=>
        {
            data.forEach((element :any) => {
              this.transactions.push(element.transaction)
              this.adresses.push(element.adressededestination);
            });
            //calculer avec group by
            const groupadressedestination = this.groupBy(this.adresses, (elemen: any) => elemen);
            var listadresse= Object.fromEntries(groupadressedestination);
            var keyadresse=Object.keys(listadresse)
            
            Object.values(listadresse).forEach((i:any)=>{
              var counttransactions =(i.length / this.adresses.length)*100;
              this.counttransaction.push(counttransactions) 

            });
                          
          
            this.chartOptions={
                chart: {
                  type: 'column'
              },
              title: {
                  text: 'Logistique Data'
              },
              colors:['#10815A','#35B549','#17A87A','#35A1B5','#4775D1','#4935B5','#8935B5','#B535AF',,'#B5356F'],
              subtitle: {
                  text: 'Nombre de transactions pour chaque adresse de destination'
              },
              accessibility: {
                  announceNewData: {
                      enabled: true
                  }
              },
              xAxis: {
                  title: {
                     text: 'Adresse de destination'
              },
                 categories: keyadresse,
              },
              yAxis: {
                  title: {
                      text: 'Transactions '
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
                          format: '{point.y:.1f}%'
                          
                      }
                  }
              },
          
              tooltip: {
                  headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                  pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
              },
          
              series: [
                  {
                      name: "Pourcentage de transactions",
                      colorByPoint: true,
                      data: this.counttransaction
                  }
              ],
              drilldown: {
                  breadcrumbs: {
                      position: {
                          align: 'right'
                      }
                  },
                  
              }
          };
            HC_exporting(Highcharts);
            setTimeout(()=>{
              window.dispatchEvent(
                new Event('resize')
              );
            },300);
    });

    
   }
   gettransactions():any{
       this.transactionsservice.getAlltransactions().subscribe(
           data => {
               this.transactions= data.results;
               
           }, error =>{
               console.log(error);
           }
       );    
   }
   groupBy(list:any, keyGetter:any) {
      const map = new Map();
      list.forEach((item:any) => {
           const transaction = keyGetter(item);
           const collection = map.get(transaction);
           if (!collection) {
               map.set(transaction, [item]);
           } else {
               collection.push(item);
           }
      });
      return map;
  }
  ngOnInit(): void {
  }


}
