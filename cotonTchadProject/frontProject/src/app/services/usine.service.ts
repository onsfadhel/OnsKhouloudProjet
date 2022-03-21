import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsineService {
  baseurl="http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getAllUsines(): Observable<any> {
    return this.http.get(this.baseurl + 'usines/',
    {headers: this.httpHeaders});
  }
  updateUsine(usine:any): Observable<any> {
    const body = {id: usine.id ,nom : usine.nom ,age: usine.age,typeEgreneuse: usine.typeEgreneuse ,
    nbreEgreneuse: usine.nbreEgreneuse,capacite: usine.capacite,personnelPermanent: usine.personnelPermanent,
    personnelSaisonnier: usine.personnelSaisonnier ,personnelOccasionnel: usine.personnelOccasionnel};
    return this.http.put(this.baseurl + 'usines/' + usine.id + '/', body,
    {headers: this.httpHeaders});
  }
  getUsineById(id:any): Observable<any> {
    return this.http.get(this.baseurl + 'usines/' + id + '/',{headers: this.httpHeaders});
  }

}
