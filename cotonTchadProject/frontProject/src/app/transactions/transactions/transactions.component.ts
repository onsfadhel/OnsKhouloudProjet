import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChauffeurComponent } from 'src/app/chauffeur/chauffeur.component';
import { FormulaireajouterComponent } from 'src/app/childChauffeur/formulaireajouter/formulaireajouter.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import { AjoutertransactionComponent } from '../childTransaction/ajoutertransaction/ajoutertransaction.component';
import { Emitters } from 'src/app/Emitters/emitters';
import { ProduitsService } from 'src/app/services/produits.service';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions = [{id:'',transaction:'',produit_id:'',chauffeur_id:'',vehicule_id:'',datededepart:'',adressededepart:'',datearrive:'',adressededestination:'',notes:'',reference:'',nom_chauffeur:''}];
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  sideBarOpen=true;
  reference:any;
  namechauffeur:any;
  authenticated=false;
  responsablelogistiquePath :String;
  transaction:any;
  p:number=1;

  constructor(private router:Router , private dialog : MatDialog , private transactionservice : TransactionsService, private http: HttpClient,private productService: ProduitsService) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    
    this.getTransactions();
  
   }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  openDialog() {
    this.dialog.open(AjoutertransactionComponent, {
      width:'500px'
    });
  }
  getTransactions(){
    this.transactionservice.getAlltransactions().subscribe(
      data=>{
        this.transactions= data.results; 
        this.transactions.forEach((transac)=>{
          this.transactionservice.getproductrById("http://127.0.0.1:8000/produits/"+transac.produit_id+"/").subscribe(
            data =>{
              transac.reference=data.reference;
              
            },error=>{
              console.log(error);
            })
          });
          this.transactions.forEach((transac)=>{
            this.transactionservice.getChauffeurById("http://127.0.0.1:8000/chauffeurs/"+transac.chauffeur_id+"/").subscribe(
              data =>{
                transac.nom_chauffeur=data.nom +' '+ data.prenom;
  
              },error=>{
                console.log(error);
              })
            });

            
      },
      error =>{
        console.log(error);
      });
    }
  deleteTransaction(transactionId :any){
    let baseurl = "http://127.0.0.1:8000/";
      
    this.http.delete(baseurl +'transactions/'+transactionId+ '/').subscribe(
      data => {
        this.getTransactions();
      }, error =>{
           console.log(error)
      });
    }
  gomodify(transaction : any){
    this.router.navigate(['/modifierTransaction',transaction.id]);
  }
  //chercher par type de transaction
  search(){
    if(this.transaction == ""){
      this.getTransactions();
    }else{
      this.transactions = this.transactions.filter(res =>{
        return res.transaction.toLocaleLowerCase().match(this.transaction.toLocaleLowerCase());
      })
    }
  }



}
