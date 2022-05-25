import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BordereauxService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http : HttpClient) { }
  getAllBordereaux(): Observable<any> {
    return this.http.get(this.baseurl + 'bordereauxtransport/',{headers: this.httpHeaders});
  }
  ajouterBordereau(bordereau:any):Observable<any>{
    return this.http.post(this.baseurl + 'bordereauxtransport/',bordereau,{headers: this.httpHeaders});
  }
  getBordereauById(id:any): Observable<any> {
    return this.http.get(this.baseurl + 'bordereauxtransport/' + id + '/',
    {headers: this.httpHeaders});
  }

}

