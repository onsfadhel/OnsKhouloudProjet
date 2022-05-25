import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CgiService } from 'src/app/services/cgi.service';

@Component({
  selector: 'app-modifierbordliv',
  templateUrl: './modifierbordliv.component.html',
  styleUrls: ['./modifierbordliv.component.css']
})
export class ModifierbordlivComponent implements OnInit {
  bordsli=[{id:'',num:'',date:'',designation:'',qte:'',model_liv:'',model_paie:'',date_paie:'',date_liv:''}];
  bordli={id:'',num:'',date:'',designation:'',qte:'',model_liv:'',model_paie:'',date_paie:'',date_liv:''};
  public BordliId :any ;
  sideBarOpen=true;
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  selectedBordli;
  opened=false;
  constructor(private http: HttpClient, private router:Router,private activatedroute: ActivatedRoute,private api:CgiService) {
    this.selectedBordli={id:'',num:'',date:'',designation:'',qte:'',model_liv:'',model_paie:'',date_paie:'',date_liv:''};
  }

  logout() {
    let isloggedIn: Boolean = false;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(isloggedIn));
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.BordliId=id;
    this.api.getBordslivByid(id).subscribe(
      data=>{
        this.selectedBordli=data;
      },
      error =>{
        console.log(error);
      });
  }

  getBordsli =() => {
    this.api.getAllBordsli().subscribe(
      data => {
        this.bordsli = data;
      },
      error => {
        console.log(error);
      });
  }

  updateBordli = () =>{
    this.api.updateBordsliv(this.selectedBordli).subscribe(
      data=> {
        this.getBordsli();
        alert("Bordereau est modifié ");
        this.router.navigate(['/responsableCGI/bordereuadelivraison']);
      },
      error => {
        console.log(error);
      }
    );

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}

