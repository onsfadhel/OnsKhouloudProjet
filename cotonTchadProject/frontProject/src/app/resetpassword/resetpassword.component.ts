import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroupDirective, NgForm} from '@angular/forms'; 
import {ErrorStateMatcher} from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  model: any = {};
  UserId:any;
  relativeLink="";
  uidb64=this.activatedroute.snapshot.params['uidb64']
  token=this.activatedroute.snapshot.params['token']
  utilisateur={id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''};
  passwords={password:'',confirmpassword:''};
  messageerreur="";
  baseurl="http://127.0.0.1:8000/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private activatedroute: ActivatedRoute,private router:Router, private http : HttpClient) { 

    this.utilisateur.password = this.passwords.password;
  }

  ngOnInit() {
    this.model.token = this.activatedroute.snapshot.queryParamMap.get('token');
    this.model.userid = this.activatedroute.snapshot.queryParamMap.get('userid');
    let uidb64=this.activatedroute.snapshot.params['uidb64']
    let token=this.activatedroute.snapshot.params['token']
  }
  verifypassword(){
    if (this.passwords.password != this.passwords.confirmpassword){
      this.messageerreur="les 2 mots de passe ne sont pas compatibles";
    }
    else if (this.passwords.password.length < 8) {
      this.messageerreur="vous devez choisir un mot de passe plus fort";
    }
    else {
      this.utilisateur.password = this.passwords.password;
      const body={password:this.utilisateur.password,token:this.token,uidb64: this.uidb64}
      this.http.patch(this.baseurl + 'password-reset-complete', body,{headers: this.httpHeaders}).subscribe(
        Response=>{
          alert("Votre mot de passe est modifié avec succés");
          this.router.navigate(['/login']);

        },error =>{
          console.log(error);

        }
        
      );

    }

  }

}