import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BordereauxService } from 'src/app/services/bordereaux.service';

@Component({
  selector: 'app-ajouterbordereaux',
  templateUrl: './ajouterbordereaux.component.html',
  styleUrls: ['./ajouterbordereaux.component.css']
})
export class AjouterbordereauxComponent implements OnInit {
  bordereau={id:'',numerobordereau:'',date:'',lieu:'',modalitepaiement:'',
  modalitelivraison:'',datePaie:'', delailivraison:'', observation:'',tauxremise:''};
  constructor(private http: HttpClient, private bordereauservice: BordereauxService , private router:Router ) { }

  ngOnInit(): void {
  }
  registerbordereau(){
    this.bordereauservice.ajouterBordereau(this.bordereau).subscribe(
      response=>{
        alert("Vous avez ajouté un bordereau du transpport");
        this.router.navigate(['/bordereaux']);
      },error=>{
        console.log(error);
      }
    );
    
  }

}
