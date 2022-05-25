import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsineService } from 'src/app/services/usine.service';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { AjouterUsineComponent } from '../childUsine/ajouter-usine/ajouter-usine.component';
import { Emitters } from 'src/app/Emitters/emitters';
@Component({
  selector: 'app-usines',
  templateUrl: './usines.component.html',
  styleUrls: ['./usines.component.css']
})
export class UsinesComponent implements OnInit {
  adminImagePath:String;
  authentificated=false;
  username: string | undefined;
  nom:any;
  sideBarOpen=true;
  p:number=1;
  usines=[{id:'',nom :'',age:'',typeEgreneuse:'',nbreEgreneuse:'',capacite:'',personnelPermanent:'',personnelSaisonnier:'',personnelOccasionnel:''}]
  constructor(private router: Router , private usineService : UsineService , private dialog : MatDialog, private http: HttpClient) {
    this.adminImagePath='./assets/images/admin.png';
    this.getUsines();
   }
   sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  search(){
    if (this.nom == ""){
      this.getUsines();
    }else{
      this.usines=this.usines.filter(res =>{
        return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
      })
    }
  }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authentificated = auth;
      }
    );
    this.http.get('http://127.0.0.1:8000/userJwt', { withCredentials: true }).subscribe(

      (res: any) => {
        this.username=  `${res.nom} ${res.prenom}`;   
        
           
        Emitters.authEmitter.emit(true);
        
      },
      err => {
        this.username='Utilisateur';
        
        Emitters.authEmitter.emit(false);
      }
    );

  }
  logout() { 
    let testc=localStorage.getItem('token');
    let token=testc?.toString();
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    let list={jwt:token};
      console.log(list)
      this.http.post('http://127.0.0.1:8000/logout',list,{headers : httpHeaders})
      .subscribe(response =>{
        this.router.navigate(['/login']);
        this.authentificated=false;
      }

      );
      localStorage.removeItem('token');
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
  //calcultotalPersonnel 
  totalpersonnel(a:number,b:number): number{
    return a+b ;
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
