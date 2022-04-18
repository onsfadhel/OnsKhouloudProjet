import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturesProductionService {
  baseurl="http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http : HttpClient) { }
  getAllfactures(): Observable<any>{
    return this.http.get(this.baseurl+'factureProduction/',{headers: this.httpHeaders});
  }
  getFactureById(id:any):Observable<any>{
    return this.http.get(this.baseurl+'factureProduction/'+id+'/',{headers : this.httpHeaders});
  }
  deleteFacture(id:any): Observable<any>{
    return this.http.delete(this.baseurl+'factureProduction/'+ id +'/',{headers : this.httpHeaders});
  }
  getProduitById(id:any):Observable<any>{
    return this.http.get(this.baseurl+'produits/'+id+'/',{headers : this.httpHeaders});
  }
  getClientById(id:any):Observable<any>{
    return this.http.get(this.baseurl+'clients/'+id+'/',{headers : this.httpHeaders});
  }
  updateFacture(facture:any): Observable<any>{
    return this.http.put(this.baseurl+'factureProduction/'+facture.id+'/',facture);
  }

}
