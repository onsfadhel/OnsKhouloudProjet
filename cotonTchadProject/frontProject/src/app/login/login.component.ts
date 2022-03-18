import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService} from 'src/app/services/login.service';
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
  public isloggedIn: Boolean = false;
  
  constructor(private router:Router, private login: LoginService) {
    this.getUsers();
    this.loggedUser;
    this.isloggedIn;
   }


  ngOnInit(): void {
  }

    getUsers = () => {
    this.login.getAllUsers().subscribe(
      data => {
        this.utilisateurs=data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
  
  loginUser(user:any):Boolean{
    let email=this.user.email;
    let password=this.user.password;
    let trouve=false;
    let loggedUser:string;
    let isloggedIn: Boolean = false;
    this.utilisateurs.forEach(function(item) {
      if(item.email ==email && item.password==password){
        trouve=true;
        isloggedIn=true;
        loggedUser=email;
        localStorage.setItem('loggedUser',loggedUser);
        localStorage.setItem('isloggedIn',String(isloggedIn));
      }  
      });
      return trouve;
  }
  onloggedin(){
    let trouve:Boolean=this.loginUser(this.user);
    if (trouve)
    {
      this.msgerreur="";
      alert("Bienvenu cher utilisateur ");
      this.router.navigate(['/vehicule']);  
    }
    else{
      this.msgerreur="Veuillez vérifier votre email et votre mot de passe"
    }
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
