import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProduitsService } from 'src/app/services/produits.service';
import { Router } from '@angular/router';
import { AjouterventeComponent } from '../childventeproduit/ajoutervente/ajoutervente.component';


@Component({
  selector: 'app-venteproduit',
  templateUrl: './venteproduit.component.html',
  styleUrls: ['./venteproduit.component.css']
})
export class VenteproduitComponent implements OnInit {

  sideBarOpen =true;
  produits=[{id:'',reference:'',categorie:'',description:'',prix_de_vente:'',quantite:'',image:'',mois:''}];
  produit ={id:'',reference:'',categorie:'',description:'',prix_de_vente:'',quantite:'',image:'',mois:''}; 
  categorie:any;
  p:number=1; 
  constructor(private productService : ProduitsService,private dialog : MatDialog , private router :Router) {
    this.getAllProducts();

   }

  ngOnInit(): void {
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      data=>{
        this.produits= data.results;
        
      },error =>{
        console.log(error);
      }
    );
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(AjouterventeComponent, {
      width:'500px'
    });
  }
  
  gomodifyproduct(produit : any){
    this.router.navigate(['/modifierventeproduit',produit.id]);    
  }
  deleteProduct(ProductId:any){
    this.productService.deleteProduct(ProductId).subscribe(
      data =>{
        this.getAllProducts();
      }, error =>{
        console.log(error);
      }
    );
  }
  search(){
    if(this.categorie == ""){
      this.getAllProducts();
    }else{
      this.produits = this.produits.filter(res =>{
        return res.categorie.toLocaleLowerCase().match(this.categorie.toLocaleLowerCase());
      })
    }
  }


}
