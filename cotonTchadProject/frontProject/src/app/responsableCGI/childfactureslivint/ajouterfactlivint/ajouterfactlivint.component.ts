import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterfactlivint',
  templateUrl: './ajouterfactlivint.component.html',
  styleUrls: ['./ajouterfactlivint.component.css']
})
export class AjouterfactlivintComponent implements OnInit {
  factli={id:'',numfact:'',date:'',intrant:'',qte:'',prixunitaire:'',prixtotal:'',modal_liv:'',echeance:'',observation:''};
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  registerfactli(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'facturelivraisonintrant/',this.factli).subscribe(
      response=>{
        alert("La Facture N° "+this.factli.numfact+" est ajoutée"),
        this.router.navigate(['/facturelivraisonintrant'])
      }, error =>{
        console.log(error)
      });
  }

}
