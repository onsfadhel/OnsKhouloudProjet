import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturescotonService } from 'src/app/services/facturescoton.service';

@Component({
  selector: 'app-modifierfacturecoton',
  templateUrl: './modifierfacturecoton.component.html',
  styleUrls: ['./modifierfacturecoton.component.css']
})
export class ModifierfacturecotonComponent implements OnInit {
  sideBarOpen=true;
  factures=[{id:'',num:'', date:'', qte:'',unite:'', prixUnitaire:'',prixTotal:'',nom_AV:''}];
  facture={id:'',num:'', date:'', qte:'',unite:'', prixUnitaire:'',prixTotal:'',nom_AV:''};
  public FactureId :any ;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  selectedFacture;
  opened=false;
  constructor(private http: HttpClient, private router:Router,private activatedroute: ActivatedRoute,private api:FacturescotonService) {
    this.selectedFacture= {id:'',num:'', date:'', qte:'',unite:'', prixUnitaire:'',prixTotal:'',nom_AV:''};
  }
  logout() {
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.FactureId=id;
    this.api.getFactureById(id).subscribe(
      data=>{
        this.selectedFacture=data;
      },
      error =>{
        console.log(error);
      });
  }
  getFactures = () => {
    this.api.getAllFactures().subscribe(
      data => {
        this.factures = data;
      },
      error => {
        console.log(error);
      });
  }

  updateFacture = () =>{
    this.api.updateFacture(this.selectedFacture).subscribe(
      data=> {
        this.getFactures();
        alert("votre table est modifié ");
        this.router.navigate(['/facturescotoncollecte']);
      },
      error => {
        console.log(error);
      }
    );

  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
