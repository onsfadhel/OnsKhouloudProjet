import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-modifiertransaction',
  templateUrl: './modifiertransaction.component.html',
  styleUrls: ['./modifiertransaction.component.css']
})
export class ModifiertransactionComponent implements OnInit {
  transaction={id:'',transaction:'',produit_id:'',vehicule_id:'',chauffeur_id:'',datededepart:'',
  adressededepart:'',datearrive:'',adressededestination:'',notes:''};
  transactions=[{id:'',transaction:'',produit_id:'',vehicule_id:'',chauffeur_id:'',datededepart:'',
  adressededepart:'',datearrive:'',adressededestination:'',notes:''}];
  TransactionId:any;
  sideBarOpen=true;
  responsablelogistiquePath:String;
  constructor(private activatedroute: ActivatedRoute , private transactionservice : TransactionsService, private router: Router, private http : HttpClient) 
  {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getTransactions();
   }

   ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.TransactionId=id;
      this.transactionservice.getTransactionById(id).subscribe(
        data=>{
          this.transaction=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  getTransactions(){
    this.transactionservice.getAlltransactions().subscribe(
      data =>{
        this.transactions= data.results;
      },
      error=>{
        console.log(error);
      }
    );
  }
  modifierTransaction= () => {
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {id:this.transaction.id ,transaction:this.transaction.transaction ,produit_id: this.transaction.produit_id,
      chauffeur_id:this.transaction.chauffeur_id,vehicule_id:this.transaction.vehicule_id,datededepart:this.transaction.datededepart,
    adressededepart:this.transaction.adressededepart ,datearrive:this.transaction.datearrive,
    adressededestination:this.transaction.adressededestination,notes:this.transaction.notes};

    this.http.put( baseurl+ 'transactions/' + this.transaction.id + '/',body,{headers: httpHeaders}).subscribe(
      data=> {
        this.getTransactions();
        alert("votre transaction est modifié ");
        this.router.navigate(['/transactions']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
