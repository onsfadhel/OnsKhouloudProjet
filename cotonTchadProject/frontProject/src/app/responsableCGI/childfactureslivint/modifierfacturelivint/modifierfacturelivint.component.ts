import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CgiService } from 'src/app/services/cgi.service';

@Component({
  selector: 'app-modifierfacturelivint',
  templateUrl: './modifierfacturelivint.component.html',
  styleUrls: ['./modifierfacturelivint.component.css']
})
export class ModifierfacturelivintComponent implements OnInit {
  factli={id:'',numfact:'',date:'',intrant:'',qte:'',prixunitaire:'',prixtotal:'',modal_liv:'',echeance:'',observation:''};
  sideBarOpen=true;
  FactliId:any;
  factsli=[{id:'',numfact:'',date:'',intrant:'',qte:'',prixunitaire:'',prixtotal:'',modal_liv:'',echeance:'',observation:''}]
  constructor(private api:CgiService,private activatedroute:ActivatedRoute, private router :Router) { }
  updateBordli = () =>{
    this.api.updateFactliv(this.factli).subscribe(
      data=> {
        this.getFactsli();
        alert("La facture est modifiée ");
        this.router.navigate(['/facturelivraisonintrant']);
      },
      error => {
        console.log(error);
      }
    );

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.FactliId=id;
    this.api.getFactlivByid(id).subscribe(
      data=>{
        this.factli=data;
      },
      error =>{
        console.log(error);
      });
  }

  getFactsli =() => {
    this.api.getAllFactures().subscribe(
      data => {
        this.factsli = data;
      },
      error => {
        console.log(error);
      });
  }

}
