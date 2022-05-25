import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardfinancier',
  templateUrl: './dashboardfinancier.component.html',
  styleUrls: ['./dashboardfinancier.component.css']
})
export class DashboardfinancierComponent implements OnInit {

  sideBarOpen=true;
  mois= Array();
  constructor() { 
    
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
    
  }
}