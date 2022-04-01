import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
import { FormGroup, AbstractControl } from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  public roles:string[];
  trouve:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { 
    this.roles=[];
  }
  get isLoggedIn() {
    return this.trouve.asObservable();
  }
  
  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + 'utilisateurs/',
    {headers: this.httpHeaders});
  }
  requestReset(body :any): Observable<any> {
    return this.http.post(this.baseurl+'request-reset-email/', body ,{headers: this.httpHeaders});
  }
  changePassword(model: any) {
    return this.http.post(this.baseurl + 'change-password/', model ,{headers: this.httpHeaders});
  }
  getUserRoles(user:any){ 
    let users=this.getAllUsers();   
    users.forEach((curUser) => {
      if( curUser.email == user.email) {
          this.roles = curUser.roles;
      }
    });
  }
}
