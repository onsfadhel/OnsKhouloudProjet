import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup ,FormControl} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-resetemail',
  templateUrl: './resetemail.component.html',
  styleUrls: ['./resetemail.component.css']
})
export class ResetemailComponent implements OnInit {
  utilisateur={id:'',nom:'',prenom:'',email:'',password:'',téléphone:'',adresse:'',role:''};
  utilisateurs=[{id:'',nom:'',prenom:'',email:'',password:'',téléphone:'',adresse:'',role:''}];
  RequestResetForm: FormGroup;
  forbiddenEmails: any;
  errorMessage: string="";
  successMessage: string="";
  IsvalidForm = true;
  msgerreur="";
  constructor(
    private authService: LoginService,
    private router: Router,
   ) {
     this.RequestResetForm=new FormGroup({});
     this.getUsers();

  }


  ngOnInit() {

    this.RequestResetForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
    });
  }

  verifemail(utilisateur : any):Boolean{
    let email=this.utilisateur.email
    
    let trouve=false;
    this.utilisateurs.forEach(function(item) {
      if(item.email ==email){
        trouve=true;
      }  
      });
      return trouve;
  }

  getUsers = () => {
    this.authService.getAllUsers().subscribe(
      data => {
        this.utilisateurs=data.results;
      },
      error => {
        console.log(error);
      }
    );
  }
  

  RequestResetUser(form :any) {
    console.log(form)
    let trouve:Boolean=this.verifemail(this.utilisateur);
    if (trouve) {
      this.IsvalidForm = true;
      this.authService.requestReset(this.RequestResetForm.value).subscribe(
        data => {
          this.RequestResetForm.reset();
          this.successMessage = "Reset password link send to email sucessfully.";
          setTimeout(() => {
            this.successMessage = "";
            this.router.navigate(['/login']);
          }, 3000);
          alert("Reset password link send to email sucessfully");
        },
        err => {

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    } else {
      this. msgerreur="Veuillez vérifier votre adresse email";
      this.IsvalidForm = false;
    }
  }
}
