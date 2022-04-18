import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-ajoutertransaction',
  templateUrl: './ajoutertransaction.component.html',
  styleUrls: ['./ajoutertransaction.component.css']
})
export class AjoutertransactionComponent implements OnInit {
  transaction={id:'',transaction:'',produit_id:'',chauffeur_id:'',vehicule_id:'' ,datededepart:'',adressededepart:'',datearrive:'',adressededestination:'',notes:'',reference:''};
  constructor(private http: HttpClient , private transactionservice : TransactionsService) { }

  ngOnInit(): void {
  }
  registertransaction(){
    const fd =new FormData();
    let baseurl = "http://127.0.0.1:8000/";
    fd.append('transaction',this.transaction.transaction);
    fd.append('produit_id',this.transaction.produit_id);
    fd.append('chauffeur_id',this.transaction.chauffeur_id);
    fd.append('vehicule_id',this.transaction.vehicule_id);
    fd.append('datededepart',this.transaction.datededepart);
    fd.append('adressededepart',this.transaction.adressededepart);
    fd.append('datearrive',this.transaction.datearrive);
    fd.append('adressededestination',this.transaction.adressededestination);
    fd.append('notes',this.transaction.notes);
    this.http.post(baseurl + 'transactions/',fd).subscribe(
      response=>{
        alert("lea transaction est ajoutéée")
        console.log(this.transaction.produit_id);
      
      }, error =>{
        console.log(error)
      });
    
    
  }

}
