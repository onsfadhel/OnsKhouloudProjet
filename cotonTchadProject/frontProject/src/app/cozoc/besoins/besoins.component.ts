import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { BesoinsService } from 'src/app/services/besoins.service';
import { AjouterbesoinComponent } from '../childbesoin/ajouterbesoin/ajouterbesoin.component';

@Component({
  selector: 'app-besoins',
  templateUrl: './besoins.component.html',
  styleUrls: ['./besoins.component.css']
})
export class BesoinsComponent implements OnInit {
  sideBarOpen=true;
  nomproduit:any;
  p:number=1;
  besoins=[{id:'',code:'', code_AV:'', nom_artc:'', qte:'',unite:'',date:'',echeance:'',prix:''}]

  constructor(private besoinsservice: BesoinsService, private dialog: MatDialog,private router:Router) {
    this.getAllbesoins();
   }

  ngOnInit(): void {
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getAllbesoins(){
    this.besoinsservice.getAllbesoins().subscribe(
      data => {
        this.besoins=data.results;
      }, error => {
        console.log(error);
      }
    )
  }
  search(){
    if(this.nomproduit == ""){
      this.getAllbesoins();
    }else{
      this.besoins = this.besoins.filter(res =>{
        return res.nom_artc.toLocaleLowerCase().match(this.nomproduit.toLocaleLowerCase());
      })
    }
  }
  openDialog() {
    this.dialog.open(AjouterbesoinComponent, {
      width:'500px'
    });
  }
  gomodify(besoin:any){
    this.router.navigate(['/modifierbesoin',besoin.id])
  }
  deletebesoin(besoinId:any){
    this.besoinsservice.deletebesoin(besoinId).subscribe(
      data =>{
        this.getAllbesoins();
      },error =>{
        console.log(error);
      }
    )
  }
}
