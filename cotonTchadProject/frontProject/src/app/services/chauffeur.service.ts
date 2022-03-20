import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChauffeurService {
  baseurl="http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  getAllChauffeurs(): Observable<any> {
    return this.http.get(this.baseurl + 'chauffeurs/',
    {headers: this.httpHeaders});

  }
  ajouterChauffeur(chauffeur:any): Observable<any> {
    return this.http.post(this.baseurl+ 'chauffeurs/',chauffeur,{headers: this.httpHeaders});

  }
  //modifier un chauffeur 
  updateChauffeur(chauffeur:any): Observable<any> {
    const body = {id: chauffeur.id ,photo: chauffeur.photo ,nom: chauffeur.nom, prenom: chauffeur.prenom ,Birthday: chauffeur.Birthday ,
      phone: chauffeur.phone ,adresse: chauffeur.adresse ,permis: chauffeur.permis,salaire: chauffeur.salaire};
    return this.http.put(this.baseurl + 'chauffeurs/' + chauffeur.id + '/', body,
    {headers: this.httpHeaders});
  }
  //récupérer un chauffeur par son id 
  getChauffeurById(id:any): Observable<any> {
    return this.http.get(this.baseurl + 'chauffeurs/' + id + '/',
    {headers: this.httpHeaders});
  }


  
}
