import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FacturesProductionService } from 'src/app/services/factures-production.service';

@Component({
  selector: 'app-ajouter-facture-production',
  templateUrl: './ajouter-facture-production.component.html',
  styleUrls: ['./ajouter-facture-production.component.css']
})
export class AjouterFactureProductionComponent implements OnInit {
  sideBarOpen=true;
  facture={id:'',numFacture:'',produit_id: '',PrixUnite: '',Qte: '',client_id:'',datedecreation:'',total: ''};
  constructor(private factureservice : FacturesProductionService, private http: HttpClient) { }

  ngOnInit(): void {
  }
  registerfacture(){
    let body={id: this.facture.id,numFacture:this.facture.numFacture,produit_id: this.facture.produit_id,
      PrixUnite: this.facture.PrixUnite,Qte: this.facture.Qte,client_id:this.facture.client_id,datedecreation:this.facture.datedecreation,
      total: this.facture.total};
    this.http.post("http://127.0.0.1:8000/factureProduction/",body).subscribe(
      response =>{
        alert("vous avez ajouté les données de facture");
      }, error =>{
        console.log(error);
      }
    )
  
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
