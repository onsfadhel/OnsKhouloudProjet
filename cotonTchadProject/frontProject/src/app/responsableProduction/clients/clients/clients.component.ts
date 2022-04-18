import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { dateFormat } from 'highcharts';
import { ClientsService } from 'src/app/services/clients.service';
import { AjouterclientComponent } from '../childClients/ajouterclient/ajouterclient.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  sideBarOpen=true;
  clients=[{id:'',nom:'',prenom:'',adresse:'',pays:'',phone:'',dateDeCommande:''}]

  constructor(private clientsservice:ClientsService, private dialog: MatDialog,private router: Router) {
    this.getclients();
   }

  ngOnInit(): void {
  }
  openDialog() {
    this.dialog.open(AjouterclientComponent, {
      width:'500px'
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getclients(){
    this.clientsservice.getAllClients().subscribe(
      data=>{
        this.clients=data.results;
      }, error =>{
        console.log(error);
      }
    );

  }
  deleteClient(id : any){
    this.clientsservice.deleteClient(id).subscribe(
      data=>{
        this.getclients();
      },error =>{
        console.log(error);
      })
  }
  gomodify(client : any){
    this.router.navigate(['/modifierclient',client.id]);


  }

}
