import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{VehiculeService} from 'src/app/vehicule.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-formulairevehicule',
  templateUrl: './formulairevehicule.component.html',
  styleUrls: ['./formulairevehicule.component.css'],
  //providers:[VehiculeService],
})
export class FormulairevehiculeComponent implements OnInit {
 /* matricule:any;
  types:any;
  poid:any;
  chauffeur:any;
  vitesse:any;
  freinage:any;*/
  consommation:any;
  register:any;
  //vehicules = [{matricule: 'test',types: 'camion',poid: '200kg',chauffeur:'mohamed',vitesse: '80',freinage:'5',consommation: 'rrrrrrrrr'}];
  //vehicule: { (): void; matricule?: any; types?: any; poid?: any; chauffeur?: any; vitesse?: any; freinage?: any; consommation?: any; })
  vehicule={ matricule: ' ',types:' ',poid: ' ',chauffeur :' ',vitesse :' ',freinage :' ',consommation: ' '};
  constructor(private http: HttpClient, private router:Router) {}
  
  ngOnInit(): void {
    
  }
  registervehicule(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'vehicules/',this.vehicule).subscribe(
      response=>{
        alert("La véhicule "+this.vehicule.types+" est ajoutée"),
        this.router.navigate(['/vehicule'])
      }, error =>{
        console.log(error)
      });
    
  }
    

}