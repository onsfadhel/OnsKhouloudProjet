import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService} from 'src/app/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private login: LoginService) { }


  ngOnInit(): void {
  }
  goResponsable(){
    this.login.getAllUsers().subscribe(
        response => {
          this.router.navigate(['/vehicule']);
        },
        error => {
          console.log(error);
        }
      );
    }
    
}
