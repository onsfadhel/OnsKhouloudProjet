import { Component, OnInit } from '@angular/core';
import { TicketdepeseeService } from 'src/app/services/ticketdepesee.service';
import { VehiculeService } from 'src/app/services/vehicule.service';


@Component({
  selector: 'app-consultervehicules',
  templateUrl: './consultervehicules.component.html',
  styleUrls: ['./consultervehicules.component.css']
})
export class ConsultervehiculesComponent implements OnInit {
  sideBarOpen=true;
  vehicules = [{id:'',matricule: '',types: '',marque:'',poid: '',vitesse: '',freinage:'',consommation: ''}];
  p:number=1;
  
  constructor(private vehiculeservice: TicketdepeseeService) {
    this.getAllvehicules();
  }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getAllvehicules(){
    this.vehiculeservice.getAllVehicules().subscribe(
      data =>{
        this.vehicules= data.results;
      }, error =>{
        console.log(error);
      }
    )
  }
  
}
