import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  responsablelogistiquePath : String;
  constructor() {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
   }

  ngOnInit(): void {
  }

}
