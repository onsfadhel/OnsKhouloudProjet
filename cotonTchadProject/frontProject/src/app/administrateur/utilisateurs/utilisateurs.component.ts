import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { AjouterutilisateurComponent } from '../childutilisateur/ajouterutilisateur/ajouterutilisateur.component';
@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {
  utilisateurs=[{id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''}];
  adminImagePath:String;

  constructor(private router: Router , private usersservice: UsersService,private dialog: MatDialog) {
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
  openDialog() {
    this.dialog.open(AjouterutilisateurComponent, {
      width:'480px'
    });
  }


  getAllusers(){
    this.usersservice.getAllUsers().subscribe(
      data =>{
        this.utilisateurs=data.results;
      }, error =>{
        console.log(error);
      });
  }

}
