import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-ajouterproduit',
  templateUrl: './ajouterproduit.component.html',
  styleUrls: ['./ajouterproduit.component.css']
})
export class AjouterproduitComponent implements OnInit {
  produit={id:'',reference:'',categorie:'',description:'',prix_de_vente:'',quantite:'',emplacement_id:'',image:''};
  ProduitImage: String;
  filetoUpload: any=null;
  constructor(private produitService : ProduitsService, private router: Router ,private http: HttpClient) {
    this.ProduitImage="./assets/images/coton3.jpg";
  
   }
    HandleFileInput(file: FileList){
      this.filetoUpload=file.item(0);
      //show image here 
      var reader= new FileReader();
      reader.onload = (event :any)=> {
        this.ProduitImage =event.target.result;
      }
      reader.readAsDataURL(this.filetoUpload);
    }

  ngOnInit(): void {
  
  }
  
  registerProduct(){
    const fd =new FormData();
    let baseurl = "http://127.0.0.1:8000/";
    
    fd.append('reference',this.produit.reference);
    fd.append('categorie',this.produit.categorie);
    fd.append('description',this.produit.description);
    fd.append('prix_de_vente',this.produit.prix_de_vente);
    fd.append('quantite',this.produit.quantite);
    fd.append('emplacement_id',this.produit.emplacement_id);
    fd.append('image',this.filetoUpload,this.filetoUpload.name);
    this.http.post(baseurl + 'produits/',fd).subscribe(
      response=>{
        alert("le produit"+this.produit.reference+" est ajouté"),
        this.router.navigate(['/responsableDeProduction'])
      }, error =>{
        console.log(error)
      });
    
    
  }

}
