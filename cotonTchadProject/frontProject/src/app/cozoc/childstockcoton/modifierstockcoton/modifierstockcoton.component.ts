import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BesoinsService } from 'src/app/services/besoins.service';

@Component({
  selector: 'app-modifierstockcoton',
  templateUrl: './modifierstockcoton.component.html',
  styleUrls: ['./modifierstockcoton.component.css']
})
export class ModifierstockcotonComponent implements OnInit {
  sideBarOpen=true;
  coton={id:'',referencecoton:'',entre:'',sortie:'',av:'',usine_id:'',mois:''};
  cotons=[{id:'',referencecoton:'',entre:'',sortie:'',av:'',usine_id:'',mois:''}];
  cotonId:any;
  constructor(private activatedroute:ActivatedRoute,private api:BesoinsService,private router:Router) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.cotonId=id;
      this.api.getcotonkByid(id).subscribe(
        data=>{
          this.coton=data;
        },
        error =>{
          console.log(error);
        })
  }
  updatecoton(){
    this.api.updatestockcoton(this.coton).subscribe(
      data=> {
        this.getcotons();
        alert("votre table est modifié ");
        this.router.navigate(['/stockcoton']);
      },
      error => {
        console.log(error);
      }
    );
    

  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  getcotons(){
    this.api.getAllcotons().subscribe(
      data => {
        this.cotons = data;
      },
      error => {
        console.log(error);
      });

  }


}
