import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChauffeurComponent } from 'src/app/chauffeur/chauffeur.component';
import { FormulaireajouterComponent } from 'src/app/childChauffeur/formulaireajouter/formulaireajouter.component';
import { TransactionsService } from 'src/app/services/transactions.service';
import { AjoutertransactionComponent } from '../childTransaction/ajoutertransaction/ajoutertransaction.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  transactions = [{id:'',transaction:'',codeproduit:'',chauffeur:{id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''} ,
  datededepart:'',
  adressededepart:'',datearrive:'',adressededestination:'',notes:''}];
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  chauffeur ={id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''};
  opened=false;
  responsablelogistiquePath :String;
  constructor(private router:Router , private dialog : MatDialog , private transactionservice : TransactionsService, private http: HttpClient) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getTransactions();
    this.getChauffeur();
   }

  ngOnInit(): void {
  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
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
  //méthode pour remplir transactions[chauffeurs ] selon url
  getChauffeur(){
    this.transactionservice.getAlltransactions().subscribe(
    data=>{
      this.transactions= data.results; 
      this.transactions.forEach((transac)=>{
        this.transactionservice.getChauffeurById(transac.chauffeur).subscribe(
          data =>{
            transac.chauffeur=data;
          }, error=>{
            console.log(error);
          }
        );
      })       
    },
    error =>{
      console.log(error);
    });
  }


}
