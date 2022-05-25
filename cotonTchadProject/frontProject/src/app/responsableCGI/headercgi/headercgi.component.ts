import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import {Emitters} from 'src/app/Emitters/emitters';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-headercgi',
  templateUrl: './headercgi.component.html',
  styleUrls: ['./headercgi.component.css']
})
export class HeadercgiComponent implements OnInit {

  responsablelogistiquePath: String;
  authenticated = false ;
  username: any;

  @Output() toggleSideBarForMe: EventEmitter <any> = new EventEmitter();
  constructor(private http : HttpClient , private router :Router , private loginService : LoginService) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
  
    
    
   }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
    this.http.get('http://127.0.0.1:8000/userJwt', { withCredentials: true }).subscribe(

      (res: any) => {
        this.username=  `${res.nom} ${res.prenom}`;   
        
           
        Emitters.authEmitter.emit(true);
        
      },
      err => {
        this.username='Utilisateur';
        
        Emitters.authEmitter.emit(false);
      }
    );

  }
  public getToken(): string {
    let token = localStorage.getItem('token');
    if(token== undefined || token== null){
      return '0'
  }
   return token;
}
  logout(): void {
    
    
    let t=localStorage.getItem('jwt');;
    console.log(t);
    //let httpHeaders = new HttpHeaders({'Content-Type': 'application/json','Authorization': 'Bearer ' +' '+ t});
    //let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    this.http.post('http://127.0.0.1:8000/logout',{}, {withCredentials: true}).subscribe(response =>{
        this.router.navigate(['/login']);
        this.authenticated=false;
      },error=>{
        console.log(error);
      }

      );
      localStorage.removeItem('token');
  }
  
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
