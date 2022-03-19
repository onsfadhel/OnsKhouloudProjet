import { Component, OnInit , ViewChild, ElementRef  } from '@angular/core';
import { ChauffeurService } from 'src/app/services/chauffeur.service';
import { Router } from '@angular/router';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-formulaireajouter',
  templateUrl: './formulaireajouter.component.html',
  styleUrls: ['./formulaireajouter.component.css']
})
export class FormulaireajouterComponent implements OnInit {
  chauffeur={id: '',photo: '',nom:'',prenom: '',Birthday: '',phone: '',adresse: '',permis: '',salaire: ''}
  chauffeurImage:any;
  filetoUpload: any=null;

  constructor(private chaufservice:ChauffeurService, private router:Router ,private http: HttpClient) {
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

  ngOnInit(): void {
  
  }
  
  registervehicule(){
    const fd =new FormData();
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    fd.append('photo',this.filetoUpload,this.filetoUpload.name);
    fd.append('nom',this.chauffeur.nom);
    fd.append('prenom',this.chauffeur.prenom);
    fd.append('Birthday',this.chauffeur.Birthday);
    fd.append('phone',this.chauffeur.phone);
    fd.append('adresse',this.chauffeur.adresse);
    fd.append('permis',this.chauffeur.permis);
    fd.append('salaire',this.chauffeur.salaire);
    this.http.post(baseurl + 'chauffeurs/',fd).subscribe(
      response=>{
        alert("La véhicule "+this.chauffeur.nom+" est ajoutée"),
        this.router.navigate(['/chauffeurs'])
      }, error =>{
        console.log(error)
      });
    
    
  }
}
