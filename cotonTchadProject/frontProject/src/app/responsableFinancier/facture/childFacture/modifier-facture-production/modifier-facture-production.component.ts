import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturesProductionService } from 'src/app/services/factures-production.service';

@Component({
  selector: 'app-modifier-facture-production',
  templateUrl: './modifier-facture-production.component.html',
  styleUrls: ['./modifier-facture-production.component.css']
})
export class ModifierFactureProductionComponent implements OnInit {

  sideBarOpen=true;
  factureid:any;
  facture={id:'',numFacture:'',produit_id: '',PrixUnite: '',Qte: '',client_id:'',datedecreation:'',total: ''};
  factures=[{id:'',numFacture:'',produit_id: '',PrixUnite: '',Qte: '',client_id:'',datedecreation:'',total: ''}];
  constructor(private factureservice : FacturesProductionService,private router: Router, private http: HttpClient,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.factureid=id;
    this.factureservice.getFactureById(this.factureid).subscribe(
        data=>{
          this.facture=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getfactures(){
    this.factureservice.getAllfactures().subscribe(
      data =>{
        this.factures=data.results;
      }, error =>{
        console.log(error);
      }
    )
  }
  modifierFacture(){
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    let body={id: this.facture.id,numFacture:this.facture.numFacture,produit_id: this.facture.produit_id,
      PrixUnite: this.facture.PrixUnite,Qte: this.facture.Qte,client_id:this.facture.client_id,datedecreation:this.facture.datedecreation,
      total: this.facture.total};
    this.http.put("http://127.0.0.1:8000/factureProduction/"+this.facture.id+"/",body,{headers: httpHeaders}).subscribe(
      data =>{
        this.getfactures();
        alert("vous avez modifié les données de facture");
        this.router.navigate(['/facturesProduction']);

      }, error =>{
        console.log(error);
      })

  }

}
