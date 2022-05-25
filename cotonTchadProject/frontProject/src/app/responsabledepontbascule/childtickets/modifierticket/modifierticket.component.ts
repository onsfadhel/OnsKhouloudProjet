import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketdepeseeService } from 'src/app/services/ticketdepesee.service';

@Component({
  selector: 'app-modifierticket',
  templateUrl: './modifierticket.component.html',
  styleUrls: ['./modifierticket.component.css']
})
export class ModifierticketComponent implements OnInit {
  ticket={id:'',numeroticket:'',caisse:'',vehicule_id:'',date:'',dateP1:'',dateP2:'',peseur:'',poidP1:'',poidP2:'',observation:''}
  sideBarOpen=true;
  ticketId:any;
  constructor(private activatedroute: ActivatedRoute, private ticketservice: TicketdepeseeService,private router:Router) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.ticketId=id;
      this.ticketservice.getticketById(id).subscribe(
        data=>{
          this.ticket=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  modifierticket(){
    this.ticketservice.updateTicket(this.ticket).subscribe(
      data=>{
        alert("votre table des tickets est modifié ");
        this.router.navigate(['/responsableDePontBascule/ticketsdepese']);
      },
      error => {
        console.log(error);

      }
    )

  }

  getAllTickets(){
    
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
