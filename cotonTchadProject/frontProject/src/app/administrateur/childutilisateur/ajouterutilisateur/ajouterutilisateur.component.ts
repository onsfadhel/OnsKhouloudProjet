import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterutilisateur',
  templateUrl: './ajouterutilisateur.component.html',
  styleUrls: ['./ajouterutilisateur.component.css']
})
export class AjouterutilisateurComponent implements OnInit {
  utilisateur={id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''};

  constructor(private http: HttpClient , private router :Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'utilisateurs/',this.utilisateur).subscribe(
      response=>{
        alert("L'utilisateur' "+this.utilisateur.nom+" est ajoutée"),
        this.router.navigate(['/admin/utilisateurs'])
      }, error =>{
        console.log(error)
      });
    }
    

}
