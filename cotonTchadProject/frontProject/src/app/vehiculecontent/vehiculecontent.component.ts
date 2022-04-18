import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormulairevehiculeComponent } from '../childVehicule/formulairevehicule/formulairevehicule.component';
import { VehiculeService } from '../services/vehicule.service';
import {Emitters} from '../Emitters/emitters';
@Component({
  selector: 'app-vehiculecontent',
  templateUrl: './vehiculecontent.component.html',
  styleUrls: ['./vehiculecontent.component.css'],
  providers:[VehiculeService],
})
export class VehiculecontentComponent implements OnInit {
  vehicules = [{id:'',matricule: '',types: '',marque:'',poid: '',vitesse: '',freinage:'',consommation: ''}];
  utilisateur={id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''};
  responsablelogistiquePath : String;
  username:any;
  sideBarOpen=true;
  authenticated = false;
   constructor(private http: HttpClient,private api: VehiculeService,private router: Router,private dialog: MatDialog) {
    this.getVehicules();
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    
   }
   sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
   openDialog() {
    this.dialog.open(FormulairevehiculeComponent, {
      width:'480px'
    });
  }
  
   getVehicules = () => {
    this.api.getAllVehicules().subscribe(
      data => {
        this.vehicules=data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
 

  deleteVehicule (vehiculeId :any){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.delete(baseurl + 'vehicules/'+vehiculeId+ '/').subscribe(
      data => {
        this.getVehicules();
      }, error =>{
        console.log(error)
      });
    
  }
  onSelect(vehicule:any){
    this.router.navigate(['/FormulaireModificationVehicule',vehicule.id]);
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    this.http.get('http://127.0.0.1:8000/userJwt', { withCredentials: true }).subscribe(

      (res: any) => {
        this.username=  `${res.nom} ${res.prenom}`;   
        
           
        Emitters.authEmitter.emit(true);
        
      },
      err => {
        this.username='Utilisateur';
        
        Emitters.authEmitter.emit(false);
      }
    );

  
  }

}
