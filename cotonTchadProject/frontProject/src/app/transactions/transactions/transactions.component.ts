import { HttpClient } from '@angular/common/http';
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
  transactions = [{id:'',transaction:'',codeproduit:'',chauffeur:'',datededepart:'',
  adressededepart:'',datearrive:'',adressededestination:'',notes:''}];
  chauffeur : any;
  opened=false;
  responsablelogistiquePath :String;
  constructor(private router:Router , private dialog : MatDialog , private transactionservice : TransactionsService, private http: HttpClient) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getTransactions();
    this.chauffeur={id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''};
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
        console.log(this.transactions);
        
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



}
