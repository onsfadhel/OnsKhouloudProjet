import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormulaireajouterComponent } from 'src/app/childChauffeur/formulaireajouter/formulaireajouter.component';
import { BordereauxService } from 'src/app/services/bordereaux.service';
import { AjouterbordereauxComponent } from '../childbordereaux/ajouterbordereaux/ajouterbordereaux.component';

@Component({
  selector: 'app-bordereaux',
  templateUrl: './bordereaux.component.html',
  styleUrls: ['./bordereaux.component.css']
})
export class BordereauxComponent implements OnInit {

  bordereaux=[{id:'',numerobordereau:'',date:'',lieu:'',modalitepaiement:'',
  modalitelivraison:'',datePaie:'', delailivraison:'', observation:'',tauxremise:''}];
  opened=false;
  responsablelogistiquePath : String;
  constructor(private router:Router , private dialog : MatDialog, private bordereauservice :BordereauxService, private http : HttpClient) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    this.getBordereaux();
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
    this.dialog.open(AjouterbordereauxComponent, {
      width:'500px'
    });
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
  deleteBordereau(bordereauId : any){
    let baseurl = "http://127.0.0.1:8000/";
    this.http.delete(baseurl + 'bordereauxlivraison/'+bordereauId+ '/').subscribe(
      response=>{
        this.getBordereaux();

      },error=>{
        console.log(error);
      }
    );
  }
  gomodify(bordereau : any){
    this.router.navigate(['/modifierBordereau',bordereau.id]);
  }

}
