import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { AjouterutilisateurComponent } from '../childutilisateur/ajouterutilisateur/ajouterutilisateur.component';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  utilisateurs=[{id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''}];
  adminImagePath:String;
  sideBarOpen=true;

  constructor(private router: Router , private usersservice: UsersService,private dialog: MatDialog , private http :HttpClient) {
    this.adminImagePath='./assets/images/admin.png';
    this.getAllusers();
   }

  ngOnInit(): void {
  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }
  //ouvrir le formulaire à cette page
  openDialog() {
    this.dialog.open(AjouterutilisateurComponent, {
      width:'480px'
    });
  }

  //récupérer tous les utilisateurs
  getAllusers(){
    this.usersservice.getAllUsers().subscribe(
      data =>{
        this.utilisateurs=data.results;
      }, error =>{
        console.log(error);
      });
  }
  //supprimer un utilisateur
  supprimerUser(chauffeurId : any){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.delete(baseurl+"utilisateurs/"+chauffeurId+'/').subscribe(
      data =>{
          this.getAllusers();
      },error =>{
        console.log(error);
      }
    );
  }
  //modifier utilisateur guider vers utilisateur 
  modifUtilisateur(utilisateur:any){
    this.router.navigate(['admin/utilisateur/modifier',utilisateur.id]);
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }


}
