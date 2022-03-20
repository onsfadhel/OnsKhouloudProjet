import { Injectable  } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  trouve:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private http:HttpClient) { }
  get isLoggedIn() {
    return this.trouve.asObservable();
  }
  
  getAllUsers(): Observable<any> {
    return this.http.get(this.baseurl + 'utilisateurs/',
    {headers: this.httpHeaders});
  }
  
}
