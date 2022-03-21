import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ajouter-usine',
  templateUrl: './ajouter-usine.component.html',
  styleUrls: ['./ajouter-usine.component.css']
})
export class AjouterUsineComponent implements OnInit {
  usine={id:'',nom :'',age:'',typeEgreneuse:'',nbreEgreneuse:'',capacite:'',personnelPermanent:'',personnelSaisonnier:'',personnelOccasionnel:''}
  constructor(private http: HttpClient,private router : Router) { }

  ngOnInit(): void {
  }
  registerUsine(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'usines/',this.usine).subscribe(
      response=>{
        alert("L'usine' "+this.usine.nom+" est ajoutée"),
        this.router.navigate(['/admin/usines'])
      }, error =>{
        console.log(error)
      });
    }

}
