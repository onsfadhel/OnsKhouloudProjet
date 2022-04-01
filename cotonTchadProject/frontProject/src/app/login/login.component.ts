import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from 'src/app/services/login.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getMatInputUnsupportedTypeError } from '@angular/material/input';
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
  public roles:string[];
  public loggedUser:any;
  form: any;
  public isloggedIn: Boolean = false;
  
  constructor(private router:Router, private loginservice: LoginService ,private formBuilder: FormBuilder ,private http : HttpClient) {
    this.loggedUser;
    this.isloggedIn;
    this.getusers();
    this.roles=[];
   }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }
  getusers(){
    this.loginservice.getAllUsers().subscribe(
      data =>{
        this.utilisateurs=data.results;
      }, error =>{
        console.log(error);
      }
    );
  }
  getUserRoles(email:String): String{   
    this.utilisateurs.forEach((curUser) => {
      if( curUser.email == email) {
          this.user.role = curUser.role;
      }
      
    });
    return this.user.role;
  }

  submit(): void {
    this.http.post('http://127.0.0.1:8000/login', this.form.getRawValue(), {
      withCredentials: true
    }).subscribe(
      Response=>{
        
        let role = this.getUserRoles(this.user.email);
        if(role=="responsable logistique"){
          this.router.navigate(['/vehicule']);
        }
        if(role=="admin"){
          this.router.navigate(['/admin/utilisateurs']);
        }
        else{
          console.log("erreur");
        }
        /*this.router.navigate(['/vehicule']);*/ 
      },error =>{
        this.msgerreur="Veuillez vérifier votre email et votre mot de passe"
      }
    );
  }
  
  
}
