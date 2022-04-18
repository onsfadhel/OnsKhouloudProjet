import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProduitsService } from 'src/app/services/produits.service';
import { AjouterproduitComponent } from '../childproduits/ajouterproduit/ajouterproduit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  sideBarOpen =true;
  produits=[{id:'',reference:'',categorie:'',description:'',prix_de_vente:'',quantite:'',emplacement_id:'',image:'',nom:''}];
  produit ={id:'',reference:'',categorie:'',description:'',prix_de_vente:'',quantite:'',emplacement_id:'',image:'',nom:''};  
  constructor(private productService : ProduitsService,private dialog : MatDialog , private router :Router) {
    this.getAllProducts();

   }

  ngOnInit(): void {
  }
  getAllProducts(){
    this.productService.getAllProducts().subscribe(
      data=>{
        this.produits= data.results;
        this.produits.forEach((p)=>{
          this.productService.getUsineById(p.emplacement_id).subscribe(
            data =>{
              p.nom=data.nom;
              
            },error=>{
              console.log(error);
            })
          });
      },error =>{
        console.log(error);
      }
    );
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(AjouterproduitComponent, {
      width:'500px'
    });
  }
  
  gomodifyproduct(produit : any){
    this.router.navigate(['/modifierproduit',produit.id]);    
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


}
