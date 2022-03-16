import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{VehiculeService} from 'src/app/vehicule.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  register:any;
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