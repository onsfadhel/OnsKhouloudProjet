import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + 'utilisateurs/',
    {headers: this.httpHeaders});
  }
  getUserById(id:any): Observable<any> {
    return this.http.get(this.baseurl + 'utilisateurs/' + id + '/',
    {headers: this.httpHeaders});
  }
  //update user 
  updateUser(utilisateur:any): Observable<any> {
    const body = {id:utilisateur.id ,nom: utilisateur.nom ,prenom: utilisateur.prenom,email:utilisateur.email,
      password:utilisateur.password ,phone: utilisateur.phone,adresse:utilisateur.adresse,role: utilisateur.role};
    return this.http.put(this.baseurl + 'utilisateurs/' + utilisateur.id + '/', body,
    {headers: this.httpHeaders});
  }
  resetPassword(utilisateur:any): Observable<any> {
    const body = {id:utilisateur.id ,nom: utilisateur.nom ,prenom: utilisateur.prenom,email:utilisateur.email,
      password:utilisateur.password ,phone: utilisateur.phone,adresse:utilisateur.adresse,role: utilisateur.role};
    return this.http.put(this.baseurl + 'password-reset-complete/' + utilisateur.id + '/', body,
    {headers: this.httpHeaders});
}
}
