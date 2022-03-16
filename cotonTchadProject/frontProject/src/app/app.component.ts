import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontProject';
 
  opened=false;
  
  responsablelogistiquePath : String;
  constructor() {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
   }

}
