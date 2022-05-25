import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterticket',
  templateUrl: './ajouterticket.component.html',
  styleUrls: ['./ajouterticket.component.css']
})
export class AjouterticketComponent implements OnInit {
  ticket={id:'',numeroticket:'',caisse:'',vehicule_id:'',date:'',dateP1:'',dateP2:'',peseur:'',poidP1:'',poidP2:'',observation:''}
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  ajouterticket(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'ticketsdepeses/',this.ticket).subscribe(
      response=>{
        alert("La ticket est ajoutée"),
        this.router.navigate(['/responsableDePontBascule/ticketsdepese'])
      }, error =>{
        console.log(error)
      });
    
  }

}
