import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FacturesProductionService } from 'src/app/services/factures-production.service';
import { AjouterFactureProductionComponent } from '../childFacture/ajouter-facture-production/ajouter-facture-production.component';

@Component({
  selector: 'app-facture-production',
  templateUrl: './facture-production.component.html',
  styleUrls: ['./facture-production.component.css']
})
export class FactureProductionComponent implements OnInit {
  sideBarOpen=true;
  factures=[{id:'',numFacture:'',produit_id: '',PrixUnite: '',Qte: '',client_id:'',datedecreation:'',total: ''}];
  constructor(private factureservice: FacturesProductionService , private dialog: MatDialog , private router: Router,private http: HttpClient) { 
    this.getfactures();
  }

  ngOnInit(): void {
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
  deleteTransaction(id :any){
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.delete('http://127.0.0.1:8000/factureProduction/'+ id +'/',{headers :httpHeaders}).subscribe(
      data =>{
        this.getfactures();
      }, error =>{
        console.log(error);
      }
    )

  }
  openDialog(){
    this.dialog.open(AjouterFactureProductionComponent, {
      width:'500px'
    });

  }
  gomodify(facture :any){
    this.router.navigate(['/modifierfactureProduction',facture.id]);

  }
  gopdf(facture :any){
    this.router.navigate(['/downloadFactureProduction',facture.id]);

  }

}
