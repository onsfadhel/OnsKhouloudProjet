import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class VehiculeService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  registervehicule(vehicule: { (): void; matricule?: any; types?: any; poid?: any; chauffeur?: any; vitesse?: any; freinage?: any; consommation?: any; }): Observable<any> {
    const body = {matricule: vehicule.matricule ,types: vehicule.types ,poid: vehicule.poid,
      chauffeur:vehicule.chauffeur,vitesse: vehicule.vitesse, freinage:vehicule.freinage
      ,consommation:vehicule.consommation};
    return this.http.post(this.baseurl + 'vehicules/',
    {headers: this.httpHeaders});
    
  }
}
