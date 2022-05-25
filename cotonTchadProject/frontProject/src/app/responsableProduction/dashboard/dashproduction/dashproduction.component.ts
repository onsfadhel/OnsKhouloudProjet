import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-dashproduction',
  templateUrl: './dashproduction.component.html',
  styleUrls: ['./dashproduction.component.css']
})
export class DashproductionComponent implements OnInit {
  sideBarOpen=true;
  mois= Array();
  constructor(private produitservice: ProduitsService) { 
    
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
    
  }

}
