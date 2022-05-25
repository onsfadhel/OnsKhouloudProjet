import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockproduitService {
  baseurl="http://127.0.0.1:8000/stockproduits/"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getAllStock():Observable<any>{
    return this.http.get(this.baseurl,{headers : this.httpHeaders});
  }
  getStockByid(id :any): Observable<any>{
    return this.http.get(this.baseurl+id+'/',{headers:this.httpHeaders});
  }
  updateStock(stock:any):Observable<any>{
    return this.http.put(this.baseurl+stock.id+'/',stock);
  }
  getUsineById(id:any): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/usines/'+id+'/',{headers: this.httpHeaders});
  }
  deletestock(id:any):Observable<any> {
    return this.http.delete(this.baseurl+id+'/', {headers : this.httpHeaders});
  }
  getStock(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/stockproduitss',{headers: this.httpHeaders});
  }
}
