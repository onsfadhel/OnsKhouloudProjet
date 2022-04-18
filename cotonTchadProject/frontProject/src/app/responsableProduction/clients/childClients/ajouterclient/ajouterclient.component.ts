import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-ajouterclient',
  templateUrl: './ajouterclient.component.html',
  styleUrls: ['./ajouterclient.component.css']
})
export class AjouterclientComponent implements OnInit {
  client={id:'',nom:'',prenom:'',adresse:'',pays:'',phone:'',dateDeCommande:''};

  constructor(private router: Router, private clientService: ClientsService , private http : HttpClient) { }

  ngOnInit(): void {
  }
  registerclient(){
    let baseurl = "http://127.0.0.1:8000/";
    this.http.post(baseurl + 'clients/',this.client).subscribe(
      response=>{
        alert("Un nouveau client est ajouté avec succés"),
        this.router.navigate(['/clients'])
      }, error =>{
        console.log(error)
      });
    }

}
