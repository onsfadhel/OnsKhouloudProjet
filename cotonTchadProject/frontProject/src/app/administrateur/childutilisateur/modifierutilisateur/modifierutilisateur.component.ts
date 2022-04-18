import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.css']
})
export class ModifierutilisateurComponent implements OnInit {
  selectedUser:any;
  IconUserPath:String;
  adminImagePath:any;
  UtilisateurId:any;
  sideBarOpen =true;
  constructor(private router : Router, private activatedRoute: ActivatedRoute ,private userService :UsersService) {
    this.selectedUser= {id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''};
    this.IconUserPath="./assets/images/user.png";
    this.adminImagePath='./assets/images/admin.png';
   }
   sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  /*logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }*/

  ngOnInit(): void {
     //récupérer le chauffeur avec l'id passé en param
     
     let id = parseInt(this.activatedRoute.snapshot.params['id']);
     this.UtilisateurId=id;
       this.userService.getUserById(id).subscribe(
         data=>{
           this.selectedUser=data;
         },
         error =>{
           console.log(error);
 
         }
         
       )
  }
  modifierUtilisateur(){
    this.userService.updateUser(this.selectedUser).subscribe(
      response =>{
        alert("votre table des utilisateurs est modifié ");
        this.router.navigate(['/admin/utilisateurs']);

      },error=>{
        console.log(error);
      }

    );
  }
 
}
