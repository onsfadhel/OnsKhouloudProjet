import { Component, OnInit , Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { VehiculeService } from 'src/app/services/vehicule.service';
@Component({
  selector: 'app-formulairemodification',
  templateUrl: './formulairemodification.component.html',
  styleUrls: ['./formulairemodification.component.css']
})
export class FormulairemodificationComponent implements OnInit {
  vehicule={ id:'',matricule: '',types:'',poid: '',chauffeur :'',vitesse :'',freinage :' ',consommation: ''};
  vehicules=[{ id:'',matricule: '',types:'',poid: '',chauffeur :'',vitesse :'',freinage :' ',consommation: ''}];
  public VehiculeId :any ;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  selectedVehicule;
  responsablelogistiquePath : String;
  opened=false;
  constructor(private http: HttpClient, private router:Router,private activatedroute: ActivatedRoute,private api:VehiculeService) { 
    this.selectedVehicule={id:'',matricule: '',types: '',poid: '',chauffeur:'',vitesse: '',freinage:'5',consommation: ''};
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
  
  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
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
  getVehicules = () => {
    this.api.getAllVehicules().subscribe(
      data => {
        this.vehicules = data;
      },
      error => {
        console.log(error);
      }
    );
  }
  updateVehicule = () => {
    this.api.updateVehicule(this.selectedVehicule).subscribe(
      data=> {
        this.getVehicules();
        alert("votre table est modifié ");
        this.router.navigate(['/vehicule']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
