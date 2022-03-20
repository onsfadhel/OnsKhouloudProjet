import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usines',
  templateUrl: './usines.component.html',
  styleUrls: ['./usines.component.css']
})
export class UsinesComponent implements OnInit {
  adminImagePath:String;

  constructor(private router: Router) {
    this.adminImagePath='./assets/images/admin.png';
   }

  ngOnInit(): void {
  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }

}
