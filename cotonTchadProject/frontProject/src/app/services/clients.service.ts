import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  baseurl="http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http : HttpClient) { }
  getAllClients(): Observable<any>{
    return this.http.get(this.baseurl+'clients/',{headers : this.httpHeaders});

  }
  getClientByid(id :any): Observable<any>{
    return this.http.get(this.baseurl+'clients/'+id+'/',{headers : this.httpHeaders});
  }
  deleteClient(id:any): Observable<any>{
    return this.http.delete(this.baseurl+'clients/'+id+'/',{headers : this.httpHeaders});
  }
  ajouterClient(client:any): Observable<any>{
    return this.http.post(this.baseurl+'clients',client,{headers: this.httpHeaders});

  }
  updateClient(client: any): Observable<any>{
    return this.http.put(this.baseurl+'clients/'+client.id+'/',client);
  }
}
