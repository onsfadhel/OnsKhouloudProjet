import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  getAllVehicules(): Observable<any> {
    return this.http.get(this.baseurl + 'vehicules/',
    {headers: this.httpHeaders});
  }
  getVehiculeById(id:any): Observable<any> {
    return this.http.get(this.baseurl + 'vehicules/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateVehicule(vehicule:any): Observable<any> {
    const body = {id: vehicule.id ,matricule : vehicule.matricule ,types : vehicule.types ,poid : vehicule.poid ,chauffeur : vehicule.chauffeur,vitesse :vehicule.vitesse ,
      freinage : vehicule.freinage ,consommation : vehicule.consommation};
    return this.http.put(this.baseurl + 'vehicules/' + vehicule.id + '/', body,
    {headers: this.httpHeaders});
  }
}
