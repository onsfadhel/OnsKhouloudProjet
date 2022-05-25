import { Component, OnInit, ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CgiService } from 'src/app/services/cgi.service';
import{ jsPDF} from 'jspdf';
@Component({
  selector: 'app-downloadbordereauliv',
  templateUrl: './downloadbordereauliv.component.html',
  styleUrls: ['./downloadbordereauliv.component.css']
})
export class DownloadbordereaulivComponent implements OnInit {

  @ViewChild('content', {static:false}) content !: ElementRef;
  bordereau={id:'',num:'',date:'',designation:'',qte:'',model_liv:'',model_paie:'',date_paie:'',date_liv:''};
  BordereauId:any;
  responsablelogistiquePath: String;
  opened= false;
  sideBarOpen=true;

  constructor(private activatedroute: ActivatedRoute ,private bordereauservice :CgiService , private router :Router) {
    this.responsablelogistiquePath='./assets/images/responsablelogistique.png';
   }
   sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.BordereauId=id;
      this.bordereauservice.getBordslivByid(id).subscribe(
        data=>{
          this.bordereau=data;
        },
        error =>{
          console.log(error);

        }
        
      )
  }
  makepdf(){
    const randomText = Math.random().toString(36).substring(7);
    const doc = new jsPDF('p','pt','a4');
    doc.setFontSize(8);
    // tslint:disable-next-line:only-arrow-functions
    doc.html(this.content.nativeElement, {
      callback: (doc)=>{
         
        doc.output("datauri"); 
        
        doc.save("bordereauLivraison.pdf");
      }

    });
  }  

}
