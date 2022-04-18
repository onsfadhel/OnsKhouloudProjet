import { Injectable } from '@angular/core';
import { HttpHeaders , HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {
  baseurl="http://127.0.0.1:8000/"
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http : HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseurl + 'produits/', { headers: this.httpHeaders });
  }
  getProductById(id : any): Observable<any>{
    return this.http.get(this.baseurl+'produits/'+id+'/',{headers:this.httpHeaders});

  }
  updateproduct(product: any): Observable<any>{
    return this.http.put(this.baseurl+'produits/'+product.id+'/',product);

  }
  newProduct(product:any): Observable<any>{
    return this.http.put(this.baseurl+'produits/',product,{headers:this.httpHeaders});
  }
  getUsineById(id:any): Observable<any> {
    return this.http.get(this.baseurl+'usines/'+id+'/',{headers: this.httpHeaders});
  }
  deleteProduct(id :any):Observable<any>{
    return this.http.delete(this.baseurl+'produits/'+id+'/',{headers: this.httpHeaders});
  }

}
