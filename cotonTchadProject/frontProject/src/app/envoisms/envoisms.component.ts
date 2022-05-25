import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envoisms',
  templateUrl: './envoisms.component.html',
  styleUrls: ['./envoisms.component.css']
})
export class EnvoismsComponent implements OnInit {
  codeSms="";
  message:any;
  user={id:'',nom:'',prenom:'',email:'',password:'',téléphone:'',adresse:'',role:''};
  roleuser:any;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http : HttpClient, private router: Router) {
    this.message="";
    this.getuser();
   }

  ngOnInit(): void {
  }
  envoisms(){
    this.http.post("http://127.0.0.1:8000/envoiesms",{},{withCredentials: true }).subscribe(
      response  =>{
        this.message="Un message est envoyé par sms"
      }, error =>{
        console.log(error);
      }
    )

  }
  getuser(){
    this.http.get("http://127.0.0.1:8000/userJwt",{withCredentials: true }).subscribe(
      (res: any)=> {
      this.user=res;
      this.roleuser=res.role;
      },error=>{
        console.log(error)
      }
    )
  }
  envoicode(){
    let body={number:this.codeSms}
    this.http.post("http://127.0.0.1:8000/code",body,{ withCredentials: true }).subscribe(
      data =>{
        this.message=data;
        if (this.message== "veuillez vérifiez votre code"){
          console.log("veuillez vérifiez votre code")
        }else{
          if(this.roleuser=="gestionnaire logistique"){
            this.router.navigate(['/vehicule']);
          }
          if(this.roleuser=="administrateur"){
            this.router.navigate(['/admin/utilisateurs']);
          }
          if(this.roleuser=="responsable de production"){
            this.router.navigate(['/responsabledeproduction/stockproduits']);
          }
          if(this.roleuser=="responsable financier"){
            this.router.navigate(['/responsableFinancier/venteproduits']);
          }
          if(this.roleuser=="responsable de pont bascule"){
            this.router.navigate(['/responsableDePontBascule/ticketsdepese']);
          }
          if(this.roleuser=="cozoc"){
            this.router.navigate(['/cozoc/besoins']);
          }
          if(this.roleuser=="responsable CGI"){
            this.router.navigate(['/responsableCGI/bordereuadelivraison']);
          }
          else{
            this.message="Vous n'avez pas encore l'accés à notre plateforme";
          }

        }

      },
       error =>{
        console.log(error);
      }
    )

  }

}
