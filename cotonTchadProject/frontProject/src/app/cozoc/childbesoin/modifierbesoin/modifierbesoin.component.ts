import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BesoinsService } from 'src/app/services/besoins.service';

@Component({
  selector: 'app-modifierbesoin',
  templateUrl: './modifierbesoin.component.html',
  styleUrls: ['./modifierbesoin.component.css']
})
export class ModifierbesoinComponent implements OnInit {
  sideBarOpen=true;
  besoin={id:'',code:'', code_AV:'', nom_artc:'', qte:'',unite:'',date:'',echeance:'',prix:''};
  besoins=[{id:'',code:'', code_AV:'', nom_artc:'', qte:'',unite:'',date:'',echeance:'',prix:''}];
  public BesoinId :any ;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  selectedBesoin;
  opened=false;
  constructor(private http: HttpClient, private router:Router,private activatedroute: ActivatedRoute,private api:BesoinsService) {
    this.selectedBesoin={id:'',code:'', code_AV:'', nom_artc:'', qte:'',unite:'',date:'',echeance:'',prix:''};

   }

  ngOnInit(): void {
    //get besoin avec id passé en param
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.BesoinId=id;
      this.api.getbesoinkByid(id).subscribe(
        data=>{
          this.selectedBesoin=data;
        },
        error =>{
          console.log(error);
        })
  }
  getBesoins = () => {
    this.api.getAllbesoins().subscribe(
      data => {
        this.besoins = data;
      },
      error => {
        console.log(error);
      });
  }
  updateBesoin = () => {
    this.api.updatebesoin(this.selectedBesoin).subscribe(
      data=> {
        this.getBesoins();
        alert("votre table est modifié ");
        this.router.navigate(['/cozoc/besoins']);
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
