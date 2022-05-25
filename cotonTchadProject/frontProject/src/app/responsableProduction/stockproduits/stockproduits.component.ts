import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StockproduitService } from 'src/app/services/stockproduit.service';
import { AjouterstockComponent } from '../childstock/ajouterstock/ajouterstock.component';

@Component({
  selector: 'app-stockproduits',
  templateUrl: './stockproduits.component.html',
  styleUrls: ['./stockproduits.component.css']
})
export class StockproduitsComponent implements OnInit {
  stocks=[{id:'',reference:'',categorie:'',description:'',entre:'',sortie:'',emplacement_id:'',image:'',mois:'',nom:''}];
  sideBarOpen=true;
  p:number=1;
  categorie:any;
  constructor(private stockservice : StockproduitService, private dialog: MatDialog, private router: Router) {
    this.getAllStock();
   }
  search(){
    if(this.categorie == ""){
      this.getAllStock();
    }else{
      this.stocks = this.stocks.filter(res =>{
        return res.categorie.toLocaleLowerCase().match(this.categorie.toLocaleLowerCase());
      })
    }
  }

  ngOnInit(): void {
  }
  getAllStock(){
    this.stockservice.getAllStock().subscribe(
      data =>{
        this.stocks=data.results;
        this.stocks.forEach((s:any)=>{
          this.stockservice.getUsineById(s.emplacement_id).subscribe(
            data =>{
              s.nom=data.nom;
            },error=>{
              console.log(error);
            })
        })
      }, error =>{
        console.log(error);
      }
    )

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(AjouterstockComponent , {
      width:'500px'
    });
  }
  gomodifystock(stock : any){
    this.router.navigate(['/modifierstock',stock.id]);    
  }
  deleteStock(stockId:any){
    this.stockservice.deletestock(stockId).subscribe(
      data =>{
        this.getAllStock();
      },error =>{
        console.log(error);
      }
    )
  }

}
