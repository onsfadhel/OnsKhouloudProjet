import { ApiService } from 'src/app/api.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormulairevehiculeComponent } from '../childVehicule/formulairevehicule/formulairevehicule.component';
@Component({
  selector: 'app-vehiculecontent',
  templateUrl: './vehiculecontent.component.html',
  styleUrls: ['./vehiculecontent.component.css'],
  providers:[ApiService],
})
export class VehiculecontentComponent implements OnInit {
  vehicules = [{id:'',matricule: '',types: '',poid: '',chauffeur:'',vitesse: '',freinage:'5',consommation: 'rrrrrrrrr'}];
  @Input() id:any;
  @Input() matricule: any;
   constructor(private http: HttpClient,private api: ApiService,private router: Router,private dialog: MatDialog) {
    this.getVehicules();
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
  }

}
