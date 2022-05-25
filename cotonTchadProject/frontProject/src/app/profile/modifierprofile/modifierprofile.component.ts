import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifierprofile',
  templateUrl: './modifierprofile.component.html',
  styleUrls: ['./modifierprofile.component.css']
})
export class ModifierprofileComponent implements OnInit {
  IconUserPath:any;
  sideBarOpen=true;
  selectedUser= {id:'',nom:'',prenom:'',email:'',password:'',phone:'',adresse:'',role:''};
  constructor(private http:HttpClient, private router: Router) { 
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
  modifieruser(user:any){
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.put("http://127.0.0.1:8000/utilisateurs/"+user.id+"/",user,{headers:httpHeaders}).subscribe(
      Response=>{
        alert("Votre profile est modifié avec succés" );
      }, error =>{ 
        console.log(error);
      }
    )
  }


}
