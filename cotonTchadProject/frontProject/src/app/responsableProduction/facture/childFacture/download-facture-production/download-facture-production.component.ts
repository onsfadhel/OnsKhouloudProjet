import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacturesProductionService } from 'src/app/services/factures-production.service';
import{ jsPDF} from 'jspdf';

@Component({
  selector: 'app-download-facture-production',
  templateUrl: './download-facture-production.component.html',
  styleUrls: ['./download-facture-production.component.css']
})
export class DownloadFactureProductionComponent implements OnInit {
  @ViewChild('content', {static:false}) content !: ElementRef;
  sideBarOpen=true;
  factureid:any;
  facture={id:'',numFacture:'',produit_id: '',PrixUnite: '',Qte: '',client_id:'',datedecreation:'',total: ''};
  factures=[{id:'',numFacture:'',produit_id: '',PrixUnite: '',Qte: '',client_id:'',datedecreation:'',total: ''}];
  constructor(private factureservice : FacturesProductionService,private router: Router, private http: HttpClient,private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedroute.snapshot.params['id']);
    this.factureid=id;
    this.factureservice.getFactureById(this.factureid).subscribe(
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
  getfactures(){
    this.factureservice.getAllfactures().subscribe(
      data =>{
        this.factures=data.results;
      }, error =>{
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
        
        doc.save("facturedeproduction.pdf");
      }

    });
    
  
  }

}
