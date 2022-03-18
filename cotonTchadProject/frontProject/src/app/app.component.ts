import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { LoginService } from './login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontProject';
  opened=false;
  trouve:any
  responsablelogistiquePath : String;
  constructor(private router: Router ,private login:LoginService) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.trouve = this.login.trouve;
   }
   logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }

}
