import { ApiService } from 'src/app/api.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-vehiculecontent',
  templateUrl: './vehiculecontent.component.html',
  styleUrls: ['./vehiculecontent.component.css'],
  providers:[ApiService],
})
export class VehiculecontentComponent implements OnInit {
  vehicules = [{id:'',matricule: '',types: '',poid: '',chauffeur:'',vitesse: '',freinage:'5',consommation: 'rrrrrrrrr'}];
  
   constructor(private http: HttpClient,private api: ApiService) {
    this.getVehicules();
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

  ngOnInit(): void {
  }

}
