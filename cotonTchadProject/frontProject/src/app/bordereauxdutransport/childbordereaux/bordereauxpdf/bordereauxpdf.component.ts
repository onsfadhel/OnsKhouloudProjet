import { Component, OnInit, ViewChild, ElementRef, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ jsPDF} from 'jspdf';
import { BordereauxService } from 'src/app/services/bordereaux.service';


@Component({
  selector: 'app-bordereauxpdf',
  templateUrl: './bordereauxpdf.component.html',
  styleUrls: ['./bordereauxpdf.component.css']
})
export class BordereauxpdfComponent implements OnInit {
  @ViewChild('content', {static:false}) content !: ElementRef;
  bordereau={id:'',numerobordereau:'',date:'',lieu:'',modalitepaiement:'',
  modalitelivraison:'',datePaie:'', delailivraison:'', observation:'',tauxremise:''};
  BordereauId:any;

  constructor(private activatedroute: ActivatedRoute ,private bordereauservice :BordereauxService) { }
  
  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.BordereauId=id;
      this.bordereauservice.getBordereauById(id).subscribe(
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
        
        doc.save("bordereaux.pdf");
      }

    });
    
  
  }
  
}
