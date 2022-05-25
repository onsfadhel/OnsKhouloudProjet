import { Component, OnInit,ViewChild, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CgiService } from 'src/app/services/cgi.service';
import{ jsPDF} from 'jspdf';
@Component({
  selector: 'app-downloadfacturelivint',
  templateUrl: './downloadfacturelivint.component.html',
  styleUrls: ['./downloadfacturelivint.component.css']
})
export class DownloadfacturelivintComponent implements OnInit {
  factli={id:'',numfact:'',date:'',intrant:'',qte:'',prixunitaire:'',prixtotal:'',modal_liv:'',echeance:'',observation:''};
  sideBarOpen=true;
  FactliId:any;
  @ViewChild('content', {static:false}) content !: ElementRef;
  constructor(private activatedroute:ActivatedRoute,private api:CgiService) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.FactliId=id;
    this.api.getFactlivByid(id).subscribe(
      data=>{
        this.factli=data;
      },
      error =>{
        console.log(error);
      });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  makepdf(){
    const randomText = Math.random().toString(36).substring(7);
    const doc = new jsPDF('p','pt','a4');
    doc.setFontSize(8);
    // tslint:disable-next-line:only-arrow-functions
    doc.html(this.content.nativeElement, {
      callback: (doc)=>{
         
        doc.output("datauri"); 
        
        doc.save("Facturedelivraisonintrant.pdf");
      }

    });
  } 

}
