import { Component, OnInit } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting';
import * as Highcharts from 'highcharts';
import { TransactionsService } from 'src/app/services/transactions.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  chartOptions:any;
  Highcharts=Highcharts;
  transactions=Array();
   count=Array();
   compt=[{transaction:'',count :''}];

  constructor(private transactionsservice : TransactionsService , private http:HttpClient) {
    var data = JSON.stringify([{"model": "app.mdl", "pk": 1, "fields": {"name": "test", "rank": 1}}]);
    data = JSON.parse(data);

        this.transactionsservice.gettransactions().subscribe((data:any)=>
        {
            data.forEach((element :any) => {
              this.transactions.push(element.transaction)
              if (!(element.transaction in this.count)) {
                this.count[element.transaction] = [];
                this.count[element.transaction].push(element);
                
              } 
              
              console.log(element.transaction );
              
              
              
              //this.count.push(element.transaction)
              //this.count=this.count.map(Number)
              //console.log(this.count)
            });
            this.chartOptions={
                chart: {
                  type: 'column'
              },
              title: {
                  text: 'Logistique Data'
              },
              colors:['#4794fa',' #ac3973','#d580ff','#ff99ff','#ff8080','#ffa64d','#1affb2',,'#ff8080'],
              subtitle: {
                  text: 'Transactions'
              },
              accessibility: {
                  announceNewData: {
                      enabled: true
                  }
              },
              xAxis: {
                  title: {
                     text: 'Transaction'
              },
                 categories: this.transactions,
              },
              yAxis: {
                  title: {
                      text: 'Adresse de destination'
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
                      name: "Adresse de destination",
                      colorByPoint: true,
                      data: [10,5,30,3,20]
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
               let tables=this.transactions
               
           }, error =>{
               console.log(error);
           }
       );
       
       
       
   }
  ngOnInit(): void {
  }

}
