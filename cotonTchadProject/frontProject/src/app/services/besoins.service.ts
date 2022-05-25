import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BesoinsService {

  baseurl="http://127.0.0.1:8000/besoins/";
  urlstock="http://127.0.0.1:8000/stockcotoncollecte/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getAllbesoins():Observable<any>{
    return this.http.get(this.baseurl,{headers : this.httpHeaders});
  }
  getbesoinkByid(id :any): Observable<any>{
    return this.http.get(this.baseurl+id+'/',{headers:this.httpHeaders});
  }
  updatebesoin(besoin:any):Observable<any>{
    return this.http.put(this.baseurl+besoin.id+'/',besoin);
  }
  deletebesoin(id:any):Observable<any> {
    return this.http.delete(this.baseurl+id+'/', {headers : this.httpHeaders});
  }
  getAllcotons():Observable<any>{
    return this.http.get(this.urlstock,{headers:this.httpHeaders});
  }
  updatestockcoton(coton:any):Observable<any>{
    return this.http.put(this.urlstock+coton.id+'/',coton);
  }
  getcotonkByid(id :any): Observable<any>{
    return this.http.get(this.urlstock+id+'/',{headers:this.httpHeaders});
  }
  
}
