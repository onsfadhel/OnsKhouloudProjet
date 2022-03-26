import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-ajoutertransaction',
  templateUrl: './ajoutertransaction.component.html',
  styleUrls: ['./ajoutertransaction.component.css']
})
export class AjoutertransactionComponent implements OnInit {
  transaction={id:'',transaction:'',codeproduit:'',chauffeur:'',datededepart:'',
  adressededepart:'',datearrive:'',adressededestination:'',notes:''};
  constructor(private http: HttpClient , private transactionservice : TransactionsService) { }

  ngOnInit(): void {
  }
  registertransaction(){
    this.transactionservice.ajouterTransaction(this.transaction).subscribe(
      Response =>{
        alert("Vous avez ajouté votre transaction avec succés");
      },error =>{
        console.log(error);
      }
    );

  }

}
