import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AjouterfactlivintComponent } from 'src/app/responsableCGI/childfactureslivint/ajouterfactlivint/ajouterfactlivint.component';
import { BesoinsService } from 'src/app/services/besoins.service';
import { AjouterstockcotonComponent } from '../childstockcoton/ajouterstockcoton/ajouterstockcoton.component';

@Component({
  selector: 'app-stockcoton',
  templateUrl: './stockcoton.component.html',
  styleUrls: ['./stockcoton.component.css']
})
export class StockcotonComponent implements OnInit {
  cotons=[{id:'',referencecoton:'',entre:'',sortie:'',av:'',usine_id:'',mois:''}];
  sideBarOpen=true;
  p:number=1;
  referencecoton:any;
  constructor(private stockservice:BesoinsService, private http:HttpClient, private router:Router,private dialog:MatDialog) {
    this.getStockCoton();
   }

  ngOnInit(): void {
  }
  getStockCoton(){
    this.stockservice.getAllcotons().subscribe(
      data =>{
        this.cotons=data.results;
      }, error =>{
        console.log(error);
      }
    )
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  deletecoton(cotonId: any){
    let baseurl = "http://127.0.0.1:8000/";

    this.http.delete(baseurl +'stockcotoncollecte/'+cotonId+ '/').subscribe(
      data => {
        this.getStockCoton();
      }, error =>{
        console.log(error)
      });
  }
  gomodify(coton:any){
    this.router.navigate(['/modifierstockcotoncollecte',coton.id]);
  }
  search(){
    if(this.referencecoton == ""){
      this.getStockCoton();
    }else{
      this.cotons= this.cotons.filter(res =>{
        return res.referencecoton.toLocaleLowerCase().match(this.referencecoton.toLocaleLowerCase());
      })
    }
  }
  openDialog() {
    this.dialog.open(AjouterstockcotonComponent, {
      width:'480px'
    });
  }

}
