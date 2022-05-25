import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterbordereliv',
  templateUrl: './ajouterbordereliv.component.html',
  styleUrls: ['./ajouterbordereliv.component.css']
})
export class AjouterborderelivComponent implements OnInit {

  register : any;
  bordli={id:' ',num:' ',date:' ',designation:' ',qte:' ',model_liv:' ',model_paie:' ',date_paie:' ',date_liv:' '};

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  registerbordli(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'bordereauxdelivraisondesintrants/',this.bordli).subscribe(
      response=>{
        alert("Bordereau N° "+this.bordli.num+" est ajoutée"),
        this.router.navigate(['/responsableCGI/bordereuadelivraison'])
      }, error =>{
        console.log(error)
      });
  }
}
