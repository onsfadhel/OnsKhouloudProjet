import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChauffeurService } from '../services/chauffeur.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormulaireajouterComponent } from '../childChauffeur/formulaireajouter/formulaireajouter.component';
@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {
  opened=false;
  responsablelogistiquePath:String;
  chauffeurs=[{id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''}];
  chauffeur={id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''}
  constructor(private router:Router , private chauffeurservice: ChauffeurService, private dialog: MatDialog) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getChauffeurs();
    
  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }
  openDialog() {
    this.dialog.open(FormulaireajouterComponent, {
      width:'480px'
    });
  }
  getChauffeurs(){
    this.chauffeurservice.getAllChauffeurs().subscribe(
      data=>{
        this.chauffeurs= data.results;
      },
      error =>{
        console.log(error);
      }
    );
      
      
    }

  ngOnInit(): void {
  }

}
