import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BordereauxService } from 'src/app/services/bordereaux.service';

@Component({
  selector: 'app-modifierborderaux',
  templateUrl: './modifierborderaux.component.html',
  styleUrls: ['./modifierborderaux.component.css']
})
export class ModifierborderauxComponent implements OnInit {
  bordereau={id:'',numerobordereau:'',date:'',lieu:'',modalitepaiement:'',
  modalitelivraison:'',datePaie:'', delailivraison:'', observation:'',tauxremise:''};
  bordereaux=[{id:'',numerobordereau:'',date:'',lieu:'',modalitepaiement:'',
  modalitelivraison:'',datePaie:'', delailivraison:'', observation:'',tauxremise:''}];
  BordereauId:any;
  opened=false;
  responsablelogistiquePath:String;
  constructor(private activatedroute: ActivatedRoute , private bordereauservice : BordereauxService, private router:Router, private http :HttpClient) 
  {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getBordereaux();
   }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.BordereauId=id;
      this.bordereauservice.getBordereauById(id).subscribe(
        data=>{
          this.bordereau=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }
  getBordereaux(){
    this.bordereauservice.getAllBordereaux().subscribe(
      data =>{
        this.bordereaux= data.results;
      },
      error=>{
        console.log(error);
      }
    );
  }
  modifierBordereau= () => {
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    const body ={id: this.bordereau.id,numerobordereau:this.bordereau.numerobordereau ,date:this.bordereau.date,
      lieu:this.bordereau.lieu,modalitepaiement: this.bordereau.modalitepaiement,
    modalitelivraison:this.bordereau.modalitelivraison ,datePaie:this.bordereau.datePaie,
     delailivraison: this.bordereau.delailivraison, observation: this.bordereau.observation,tauxremise:this.bordereau.tauxremise}; ;

    this.http.put( baseurl+ 'bordereauxlivraison/' + this.bordereau.id + '/',body,{headers: httpHeaders}).subscribe(
      data=> {
        this.getBordereaux();
        alert("votre Bordereau est modifié ");
        this.router.navigate(['/bordereaux']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
