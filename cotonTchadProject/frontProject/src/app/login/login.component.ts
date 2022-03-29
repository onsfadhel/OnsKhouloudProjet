import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from 'src/app/services/login.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  user={id:'',nom:'',prenom:'',email:'',password:'',téléphone:'',adresse:'',role:''};
  msgerreur="";
  utilisateurs=[{id:'',nom:'',prenom:'',email:'',password:'',téléphone:'',adresse:'',role:''}];
  public loggedUser:any;
  form: any;
  public isloggedIn: Boolean = false;
  
  constructor(private router:Router, private login: LoginService ,private formBuilder: FormBuilder ,private http : HttpClient) {
    this.loggedUser;
    this.isloggedIn;
   }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }


  submit(): void {
    this.http.post('http://127.0.0.1:8000/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(
      Response=>{
        this.router.navigate(['/vehicule']); 
      },error =>{
        this.msgerreur="Veuillez vérifier votre email et votre mot de passe"
      }
    );
  }
  
  
}
