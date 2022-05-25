import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';
import { StockproduitService } from 'src/app/services/stockproduit.service';

@Component({
  selector: 'app-modifierstock',
  templateUrl: './modifierstock.component.html',
  styleUrls: ['./modifierstock.component.css']
})
export class ModifierstockComponent implements OnInit {
  stock ={id:'',reference:'',categorie:'',description:'',entre:'',sortie:'',emplacement_id:'',image:'',mois:'',nom:''}
  sideBarOpen=true;
  filetoUpload: any=null;
  selectedStock:any;
  stockId:any;
  constructor(private activatedroute: ActivatedRoute, private stockService: StockproduitService , private router: Router , private http : HttpClient) {
    this.selectedStock=this.stock.image;
   }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  HandleFileInput(file: FileList){
    this.filetoUpload=file.item(0);
    //show image here 
    var reader= new FileReader();
    reader.onload = (event :any)=> {
      this.selectedStock.photo =event.target.result;
    }
    reader.readAsDataURL(this.filetoUpload);
  }
  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.stockId=id;
      this.stockService.getStockByid(id).subscribe(
        data=>{
          this.stock=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }

  modifierStock(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {id:this.stock.id,reference:this.stock.reference,categorie:this.stock.categorie,
      description:this.stock.description,entre:this.stock.entre,sortie:this.stock.sortie,
      emplacement_id:this.stock.emplacement_id,image:this.selectedStock.name, mois:this.stock.mois};

    return this.http.put( baseurl+ 'stockproduits/' + this.stock.id + '/',body,
    {headers: httpHeaders}).subscribe(
      response=> {
        alert("votre table est modifié ");
        this.router.navigate(['/stockproduits']);
      },
      error => {
        console.log(error);
      }
    );
  }



}
