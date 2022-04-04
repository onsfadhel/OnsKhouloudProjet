import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: any;
  transactions=Array();
  count=Array();
  ApiUrl="http://127.0.0.1:8000/transactions/"					
  constructor(private http:HttpClient){
    this.getDepartments();
  }

  ngOnInit(): void {
    this.getDepartments();
  }
  getDepartments()
      {
        this.http.get(this.ApiUrl).subscribe((data:any)=>
        {
            data.forEach((element :any) => {
              this.transactions.push(element.transaction)
              this.count.push(element.StudentCount)
              this.count=this.count.map(Number)
            });
      this.chartOptions = {
        xAxis: {
          categories: this.transactions
        },
        series: [{
          name: 'Department',
          data: this.count,
        }, ],
        chart: {
          type: "bar",
        },
      };
    })
    }

}
