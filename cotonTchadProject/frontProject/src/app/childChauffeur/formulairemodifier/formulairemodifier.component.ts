import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { HttpClient , HttpHeaders } from '@angular/common/http';
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
  chauffeurId:any;
  chauffeurs=[{id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''}];
  selectedChauffeur:any;
  constructor(private router: Router , private chauffeurservice: ChauffeurService, private activatedRoute: ActivatedRoute ,private http :HttpClient) { 
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.selectedChauffeur={id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''};  
    this.chauffeurImage='./assets/images/responsablelogistique.png';
    

  
   }
   HandleFileInput(file: FileList){
    this.filetoUpload=file.item(0);
    //show image here 
    var reader= new FileReader();
    reader.onload = (event :any)=> {
      this.selectedChauffeur.photo =event.target.result;
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
     //récupérer le chauffeur avec l'id passé en param
     
     let id = parseInt(this.activatedRoute.snapshot.params['id']);
     this.chauffeurId=id;
       this.chauffeurservice.getChauffeurById(id).subscribe(
         data=>{
           this.selectedChauffeur=data;
         },
         error =>{
           console.log(error);
 
         }
         
       )

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
  //modifier le chauffeur en cliquant su le boutton 
  updateChauffeur = () => {
    const fd =new FormData();
    
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const body = {id: this.selectedChauffeur.id ,photo :this.chauffeurImage.name ,nom: this.selectedChauffeur.nom, 
      prenom: this.selectedChauffeur.prenom ,Birthday: this.selectedChauffeur.Birthday ,
      phone: this.selectedChauffeur.phone ,adresse: this.selectedChauffeur.adresse ,permis: this.selectedChauffeur.permis,
      salaire: this.selectedChauffeur.salaire};

    return this.http.put( baseurl+ 'chauffeurs/' + this.selectedChauffeur.id + '/',body,
    {headers: httpHeaders}).subscribe(
      data=> {
        this.getChauffeurs();
        alert("votre table est modifié ");
        this.router.navigate(['/chauffeur']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
