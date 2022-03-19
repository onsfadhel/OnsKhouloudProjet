import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
@Component({
  selector: 'app-formulairemodifier',
  templateUrl: './formulairemodifier.component.html',
  styleUrls: ['./formulairemodifier.component.css']
})
export class FormulairemodifierComponent implements OnInit {
  responsablelogistiquePath : String;
  opened=false;
  filetoUpload: any=null;
  chauffeurImage:any;
  chauffeurs=[{id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''}];
  selectedChauffeur:any;
  constructor(private router: Router , private chauffeurservice: ChauffeurService) { 
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.selectedChauffeur={id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''};  
    this.chauffeurImage="./assets/images/responsablelogistique.png";
  
   }
    HandleFileInput(file: FileList){
      this.filetoUpload=file.item(0);
      //show image here 
      var reader= new FileReader();
      reader.onload = (event :any)=> {
        this.chauffeurImage =event.target.result;
      }
      reader.readAsDataURL(this.filetoUpload);
    }

  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

  getChauffeurs = () => {
    this.chauffeurservice.getAllChauffeurs().subscribe(
      data => {
        this.chauffeurs = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  updateChauffeur = () => {
    this.chauffeurservice.updateChauffeur(this.selectedChauffeur).subscribe(
      data=> {
        this.getChauffeurs();
        alert("votre chauffeur est modifié ");
        this.router.navigate(['/chauffeur']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
