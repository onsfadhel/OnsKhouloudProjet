import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CgiService {

  baseurl="http://127.0.0.1:8000/bordereauxdelivraisondesintrants/";
  urlfacture="http://127.0.0.1:8000/facturelivraisonintrant/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getAllBordsli():Observable<any>{
    return this.http.get(this.baseurl,{headers : this.httpHeaders});
  }
  getBordslivByid(id :any): Observable<any>{
    return this.http.get(this.baseurl+id+'/',{headers:this.httpHeaders});
  }
  updateBordsliv(besoin:any):Observable<any>{
    return this.http.put(this.baseurl+besoin.id+'/',besoin);
  }
  deleteBordliv(id:any):Observable<any> {
    return this.http.delete(this.baseurl+id+'/', {headers : this.httpHeaders});
  }
  getAllFactures():Observable<any>{
    return this.http.get(this.urlfacture,{headers : this.httpHeaders});
  }
  getFactlivByid(id :any): Observable<any>{
    return this.http.get(this.urlfacture+id+'/',{headers:this.httpHeaders});
  }
  updateFactliv(besoin:any):Observable<any>{
    return this.http.put(this.urlfacture+besoin.id+'/',besoin);
  }
  deleteFactliv(id:any):Observable<any> {
    return this.http.delete(this.urlfacture+id+'/', {headers : this.httpHeaders});
  }
}
