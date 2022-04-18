import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';
import { HttpHeaders , HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.css']
})
export class ModifierproduitComponent implements OnInit {
  produit ={id:'',reference:'',categorie:'',description:'',prix_de_vente:'',quantite:'',emplacement_id:'',image:'',nom:''}
  sideBarOpen=true;
  filetoUpload: any=null;
  selectedProduct:any;
  produitId:any;
  constructor(private activatedroute: ActivatedRoute, private produitservice: ProduitsService , private router: Router , private http : HttpClient) {
    this.selectedProduct=this.produit.image;
   }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  HandleFileInput(file: FileList){
    this.filetoUpload=file.item(0);
    //show image here 
    var reader= new FileReader();
    reader.onload = (event :any)=> {
      this.selectedProduct.photo =event.target.result;
    }
    reader.readAsDataURL(this.filetoUpload);
  }
  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.produitId=id;
      this.produitservice.getProductById(id).subscribe(
        data=>{
          this.produit=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  modifierProduit(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {id:this.produit.id,reference:this.produit.reference,categorie:this.produit.categorie,
      description:this.produit.description,prix_de_vente:this.produit.prix_de_vente,quantite:this.produit.quantite,
      emplacement_id:this.produit.emplacement_id,image:this.selectedProduct.name};

    return this.http.put( baseurl+ 'produits/' + this.produit.id + '/',body,
    {headers: httpHeaders}).subscribe(
      response=> {
        alert("votre table est modifié ");
        this.router.navigate(['/responsableDeProduction']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
