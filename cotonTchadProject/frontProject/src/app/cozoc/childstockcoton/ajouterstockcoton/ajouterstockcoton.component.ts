import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouterstockcoton',
  templateUrl: './ajouterstockcoton.component.html',
  styleUrls: ['./ajouterstockcoton.component.css']
})
export class AjouterstockcotonComponent implements OnInit {
  coton={id:'',referencecoton:'',entre:'',sortie:'',av:'',usine_id:'',mois:''};
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
  }
  registercoton(){
    let baseurl = "http://127.0.0.1:8000/";
    let httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post(baseurl + 'stockcotoncollecte/',this.coton).subscribe(
      response=>{
        alert("Le coton avec le réference "+this.coton.referencecoton+" ajoutée avec succés"),
        this.router.navigate(['/stockcoton'])
      }, error =>{
        console.log(error)
      });

  }

}
