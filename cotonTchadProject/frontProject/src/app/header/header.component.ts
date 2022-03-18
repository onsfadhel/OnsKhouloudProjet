import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened=false;
  
  responsablelogistiquePath : String;
  constructor(private router: Router) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
   }
   logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
