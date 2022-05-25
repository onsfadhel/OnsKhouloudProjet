import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterfacturecoton',
  templateUrl: './ajouterfacturecoton.component.html',
  styleUrls: ['./ajouterfacturecoton.component.css']
})
export class AjouterfacturecotonComponent implements OnInit {

  register : any;
  facture={id:' ',num:' ', date:' ', qte:' ',unite:' ', prixUnitaire:' ',prixTotal:' ',nom_AV:' '};
  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }
  registerfacture(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'facturescoton/',this.facture).subscribe(
      response=>{
        alert("La facture "+this.facture.num+" est ajoutée"),
        this.router.navigate(['/facture'])
      }, error =>{
        console.log(error)
      });
  }


}
