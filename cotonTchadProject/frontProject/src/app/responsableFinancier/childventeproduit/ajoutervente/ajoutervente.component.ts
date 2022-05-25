import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ajoutervente',
  templateUrl: './ajoutervente.component.html',
  styleUrls: ['./ajoutervente.component.css']
})
export class AjouterventeComponent implements OnInit {

  produit={id:'',reference:'',categorie:'',description:'',prix_de_vente:'',quantite:'',image:'',mois:''};
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
    fd.append('image',this.filetoUpload,this.filetoUpload.name);
    fd.append('mois',this.produit.mois);
    this.http.post(baseurl + 'produits/',fd).subscribe(
      response=>{
        alert("le produit"+this.produit.reference+" est ajouté"),
        this.router.navigate(['/responsableDeProduction'])
      }, error =>{
        console.log(error)
      });
    
    
  }

}
