import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterbesoin',
  templateUrl: './ajouterbesoin.component.html',
  styleUrls: ['./ajouterbesoin.component.css']
})
export class AjouterbesoinComponent implements OnInit {

  register:any;
  besoin={id:' ',code:' ', code_AV:' ', nom_artc:' ', qte:' ',unite:' ',date:' ',echeance:' ',prix:' '}
  constructor(private http: HttpClient, private router:Router) {}

  ngOnInit(): void {
  }
  registerbesoin(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'besoins/',this.besoin).subscribe(
      response=>{
        alert("La demande de besoin avec le numéro "+this.besoin.code+" ajoutée avec succés"),
        this.router.navigate(['/cozoc/besoins'])
      }, error =>{
        console.log(error)
      });

  }
}
