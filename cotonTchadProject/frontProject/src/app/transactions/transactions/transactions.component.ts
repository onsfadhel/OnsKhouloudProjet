import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  opened=false;
  responsablelogistiquePath :String;
  constructor(private router:Router , private dialog : MatDialog , private transactionservice : TransactionsService) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getTransactions();
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


}
