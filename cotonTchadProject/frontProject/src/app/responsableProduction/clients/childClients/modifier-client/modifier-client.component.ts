import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {
  client={id:'',nom:'',prenom:'',adresse:'',pays:'',phone:'',dateDeCommande:''};
  sideBarOpen=true;
  clientId:any;
  constructor(private activatedroute: ActivatedRoute,private clientService: ClientsService, private router : Router) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.clientId=id;
      this.clientService.getClientByid(id).subscribe(
        data=>{
          this.client=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  modifierClient(){
    this.clientService.updateClient(this.client).subscribe(
      response => {
        alert("Votre client est modifié avec succés");
        this.router.navigate(['/clients']);
      }, error =>{
        console.log(error);
      }
    )
  }
}
