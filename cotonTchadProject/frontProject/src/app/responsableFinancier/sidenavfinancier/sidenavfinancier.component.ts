import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenavfinancier',
  templateUrl: './sidenavfinancier.component.html',
  styleUrls: ['./sidenavfinancier.component.css']
})
export class SidenavfinancierComponent implements OnInit {
  collapsed=false;
  constructor() { }

  ngOnInit(): void {
  }

}
