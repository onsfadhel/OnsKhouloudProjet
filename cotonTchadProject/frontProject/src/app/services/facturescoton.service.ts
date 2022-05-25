import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturescotonService {
  baseurl="http://127.0.0.1:8000/facturescoton/"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getAllFactures():Observable<any>{
    return this.http.get(this.baseurl,{headers : this.httpHeaders});
  }
  getFactureById(id :any): Observable<any>{
    return this.http.get(this.baseurl+id+'/',{headers:this.httpHeaders});
  }
  updateFacture(facture:any):Observable<any>{
    return this.http.put(this.baseurl+facture.id+'/',facture);
  }
  deleteFacture(id:any):Observable<any> {
    return this.http.delete(this.baseurl+id+'/', {headers : this.httpHeaders});
  }
}
