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

  
}
