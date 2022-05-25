import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChauffeurService } from '../services/chauffeur.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormulaireajouterComponent } from '../childChauffeur/formulaireajouter/formulaireajouter.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-chauffeur',
  templateUrl: './chauffeur.component.html',
  styleUrls: ['./chauffeur.component.css']
})
export class ChauffeurComponent implements OnInit {
  sideBarOpen=true;
  responsablelogistiquePath:String;
  nom:any;
  p:number=1;
  chauffeurs=[{id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''}];
  chauffeur={id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''};
  constructor(private router:Router , private chauffeurservice: ChauffeurService, private dialog: MatDialog ,private http:HttpClient) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getChauffeurs();
  }


  onSelect(chauffeur:any){
    this.router.navigate(['/modifierChauffeur',chauffeur.id]);
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialog() {
    this.dialog.open(FormulaireajouterComponent, {
      width:'500px'
    });
  }
  //récupérer liste des chauffeurs
  getChauffeurs(){
    this.chauffeurservice.getAllChauffeurs().subscribe(
      data=>{
        this.chauffeurs= data.results;
      },
      error =>{
        console.log(error);
      });
    }

    //supprimer iun chauffeur 
    deleteChauffeur(ChauffeurId :any){
      let baseurl = "http://127.0.0.1:8000/";
      
      this.http.delete(baseurl +'chauffeurs/'+ChauffeurId+ '/').subscribe(
        data => {
          this.getChauffeurs();
        }, error =>{
          console.log(error)
        });
      
    }
    search(){
      if(this.nom == ""){
        this.getChauffeurs();
      }else{
        this.chauffeurs = this.chauffeurs.filter(res =>{
          return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
        })
      }
    }

  ngOnInit(): void {
  }

}
