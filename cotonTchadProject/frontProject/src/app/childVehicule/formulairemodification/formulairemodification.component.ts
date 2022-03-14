import { Component, OnInit , Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-formulairemodification',
  templateUrl: './formulairemodification.component.html',
  styleUrls: ['./formulairemodification.component.css']
})
export class FormulairemodificationComponent implements OnInit {
  vehicule={ id:'',matricule: ' ',types:' ',poid: ' ',chauffeur :' ',vitesse :' ',freinage :' ',consommation: ' '};
  public VehiculeId :any ;
 
  selectedVehicule;
  constructor(private http: HttpClient, private router:Router,private activatedroute: ActivatedRoute,private api:ApiService) { 
    this.selectedVehicule={id:'',matricule: '',types: '',poid: '',chauffeur:'',vitesse: '',freinage:'5',consommation: ''};
  }

  ngOnInit(): void {
    //get vehicule avec id passé en param
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.VehiculeId=id;
      this.api.getVehiculeById(id).subscribe(
        data=>{
          this.selectedVehicule=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  modifiertablevehicule(vehicule :any){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const body= { id: vehicule.id ,matricule: vehicule.matricule ,types: vehicule.types ,poid: vehicule.poid ,chauffeur : vehicule.chauffeur,vitesse :vehicule.vitesse ,
      freinage :vehicule.freinage ,consommation: vehicule.consommation};
    this.http.put(baseurl + 'vehicules/'+vehicule.id+'/', body).subscribe(
      data=>{
        alert("Votre table est modifié ");
        this.router.navigate(['/vehicule']);
      }
    )
    
    
  }
}
