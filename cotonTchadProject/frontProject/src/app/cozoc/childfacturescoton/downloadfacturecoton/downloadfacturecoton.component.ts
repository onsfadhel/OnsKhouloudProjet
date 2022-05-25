import { Component, OnInit , ElementRef,ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ jsPDF} from 'jspdf';
import { FacturescotonService } from 'src/app/services/facturescoton.service';
import { FacturescotonComponent } from '../../facturescoton/facturescoton.component';
@Component({
  selector: 'app-downloadfacturecoton',
  templateUrl: './downloadfacturecoton.component.html',
  styleUrls: ['./downloadfacturecoton.component.css']
})
export class DownloadfacturecotonComponent implements OnInit {
  facture={id:'',num:'', date:'', qte:'',unite:'', prixUnitaire:'',prixTotal:'',nom_AV:''};
  sideBarOpen=true;
  FactureId:any;
  @ViewChild('content', {static:false}) content !: ElementRef;
  constructor(private activatedroute:ActivatedRoute,private factureservice:FacturescotonService ) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.FactureId=id;
      this.factureservice.getFactureById(id).subscribe(
        data=>{
          this.facture=data;
        },
        error =>{
          console.log(error);

        }
        
      )
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
        
        doc.save("Factureducotoncollecte.pdf");
      }

    });
  } 
}
