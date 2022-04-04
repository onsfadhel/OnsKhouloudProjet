import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
 
  constructor(private http : HttpClient) { }
  getAlltransactions(): Observable<any> {
    return this.http.get(this.baseurl + 'transactions/',{headers: this.httpHeaders});
  }
  ajouterTransaction(transaction:any):Observable<any>{
    return this.http.post(this.baseurl + 'transactions/',transaction,{headers: this.httpHeaders});
  }
  getTransactionById(id:any): Observable<any> {
    return this.http.get(this.baseurl + 'transactions/' + id + '/',{headers: this.httpHeaders});
  }
  getChauffeurById(url:any): Observable<any> {
    return this.http.get(url,{headers: this.httpHeaders});
  }
  gettransactions(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/departments',{headers: this.httpHeaders});
  }



}
