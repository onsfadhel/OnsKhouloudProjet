import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsineService } from 'src/app/services/usine.service';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { AjouterUsineComponent } from '../childUsine/ajouter-usine/ajouter-usine.component';
@Component({
  selector: 'app-usines',
  templateUrl: './usines.component.html',
  styleUrls: ['./usines.component.css']
})
export class UsinesComponent implements OnInit {
  adminImagePath:String;
  usines=[{id:'',nom :'',age:'',typeEgreneuse:'',nbreEgreneuse:'',capacite:'',personnelPermanent:'',personnelSaisonnier:'',personnelOccasionnel:''}]
  constructor(private router: Router , private usineService : UsineService , private dialog : MatDialog, private http: HttpClient) {
    this.adminImagePath='./assets/images/admin.png';
    this.getUsines();
   }

  ngOnInit(): void {
  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }
  openFormAjout() {
    this.dialog.open(AjouterUsineComponent, {
      width:'480px'
    });
  }
  //envoi de l'id par parametre au formulaire de modification 
  modifUsine(usine:any){
    this.router.navigate(['admin/usines/ModifierUsine',usine.id]);
  }
  //supprimer Usine 
  supprimerUsine(UsineId: any){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.delete(baseurl+"usines/"+UsineId+'/').subscribe(
      data =>{
          this.getUsines();
      },error =>{
        console.log(error);
      }
    );
  }
  getUsines(){
    this.usineService.getAllUsines().subscribe(
      data =>{
        this.usines=data.results;
      },error=>{
        console.log(error);
      }
    )
  }

}
