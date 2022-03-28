import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  responsablelogistiquePath:String;
  opened=false;
  bigChart:any;
  pieChart : any;

  constructor(private router: Router, private dashboardservice: DashboardService) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
    
   }

  ngOnInit(): void {
    this.bigChart = this.dashboardservice.bigChart();
    this.pieChart = this.dashboardservice.pieChart();

  }
  logout() { 
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }

}
