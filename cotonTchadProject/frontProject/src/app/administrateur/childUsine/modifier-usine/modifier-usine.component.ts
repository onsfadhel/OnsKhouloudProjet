import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsineService } from 'src/app/services/usine.service';

@Component({
  selector: 'app-modifier-usine',
  templateUrl: './modifier-usine.component.html',
  styleUrls: ['./modifier-usine.component.css']
})
export class ModifierUsineComponent implements OnInit {
  selectedUsine: any;
  adminImagePath: String;
  ImageUsinePath :String;
  UsineId:any;
  sideBarOpen=true;
  constructor(private router : Router , private usineService : UsineService ,private activatedRoute: ActivatedRoute) { 
    this.adminImagePath='./assets/images/admin.png';
    this.ImageUsinePath="./assets/images/download.jpg";
    this.selectedUsine=={id:'',nom :'',age:'',typeEgreneuse:'',nbreEgreneuse:'',capacite:'',personnelPermanent:'',personnelSaisonnier:'',personnelOccasionnel:''};
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
         //récupérer l'usine avec l'id passé en param
     
         let id = parseInt(this.activatedRoute.snapshot.params['id']);
         this.UsineId=id;
           this.usineService.getUsineById(id).subscribe(
             data=>{
               this.selectedUsine=data;
             },
             error =>{
               console.log(error);
     
             }
             
           )
  }
  //modifier une usine 
  modifierUsine(){
    this.usineService.updateUsine(this.selectedUsine).subscribe(
      response =>{
        alert("Les données de votre usine sont modifié");
        this.router.navigate(['/admin/usines']);
      },error => {
        console.log(error);
      }
    );

  }

}
