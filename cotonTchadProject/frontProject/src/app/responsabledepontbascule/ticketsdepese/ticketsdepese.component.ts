import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { TicketdepeseeService } from 'src/app/services/ticketdepesee.service';
import { AjouterticketComponent } from '../childtickets/ajouterticket/ajouterticket.component';

@Component({
  selector: 'app-ticketsdepese',
  templateUrl: './ticketsdepese.component.html',
  styleUrls: ['./ticketsdepese.component.css']
})
export class TicketsdepeseComponent implements OnInit {
  sideBarOpen=true;
  numeroticket:any;
  p:number=1;
  tickets=[{id:'',numeroticket:'',caisse:'',vehicule_id:'',date:'',dateP1:'',dateP2:'',peseur:'',poidP1:'',poidP2:'',observation:''}]
  constructor(private ticketsservice:TicketdepeseeService, private dialog:MatDialog,private router:Router,private http:HttpClient) { 
    this.gettickets();
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  search(){
    if (this.numeroticket == ""){
      this.gettickets();
    }else{
      this.tickets=this.tickets.filter(res =>{
        return res.numeroticket.toLocaleLowerCase().match(this.numeroticket.toLocaleLowerCase());
      })
    }
  }
  openDialog() {
    this.dialog.open(AjouterticketComponent, {
      width:'500px'
    });
  }

  ngOnInit(): void {
  }
  gettickets(){
    this.ticketsservice.getAlltickets().subscribe(
      data =>{
        this.tickets=data.results;
      }, error =>{
        console.log(error)
      }
    )

  }
  deleteticket(ticketId:any){
    let url="http://127.0.0.1:8000/"
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.delete(url+"ticketsdepeses/"+ticketId+"/").subscribe(
      data => {
        this.gettickets();
      }, error =>{
        console.log(error);
      }
    )
  }
  modifierticket(ticket:any){
    this.router.navigate(['modifierticket',ticket.id]);
  }

}
