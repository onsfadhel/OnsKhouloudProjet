import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterstock',
  templateUrl: './ajouterstock.component.html',
  styleUrls: ['./ajouterstock.component.css']
})
export class AjouterstockComponent implements OnInit {
  ProduitImage: String;
  filetoUpload: any=null;
  stock={id:'',reference:'',categorie:'',description:'',entre:'',sortie:'',emplacement_id:'',image:'',mois:'',nom:''};
  constructor(private http: HttpClient, private router: Router) { 
    this.ProduitImage="./assets/images/coton3.jpg";
  }

  ngOnInit(): void { 
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
  registerStock(){
    const fd =new FormData();
    let baseurl = "http://127.0.0.1:8000/";
    
    fd.append('reference',this.stock.reference);
    fd.append('categorie',this.stock.categorie);
    fd.append('description',this.stock.description);
    fd.append('entre',this.stock.entre);
    fd.append('sortie',this.stock.sortie);
    fd.append('emplacement_id',this.stock.emplacement_id);
    fd.append('image',this.filetoUpload,this.filetoUpload.name);
    fd.append('mois',this.stock.mois);
    this.http.post(baseurl + 'stockproduits/',fd).subscribe(
      response=>{
        alert("le stock est ajouté"),
        this.router.navigate(['/stockproduits'])
      }, error =>{
        console.log(error)
      });
    
    
  }


}
