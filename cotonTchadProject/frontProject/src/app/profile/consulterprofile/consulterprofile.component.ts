import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulterprofile',
  templateUrl: './consulterprofile.component.html',
  styleUrls: ['./consulterprofile.component.css']
})
export class ConsulterprofileComponent implements OnInit {
  sideBarOpen=true;
  IconUserPath:any;
  selectedUser= {id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''};
  constructor(private http:HttpClient) { 
    this.IconUserPath="./assets/images/responsablelogistique.png";
    this.getuser();
    }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getuser(){
    this.http.get('http://127.0.0.1:8000/userJwt', { withCredentials: true }).subscribe(
      (res: any)=>{
        this.selectedUser=res;
      }, error =>{
        console.log(error);
      }
    )
  }

}
