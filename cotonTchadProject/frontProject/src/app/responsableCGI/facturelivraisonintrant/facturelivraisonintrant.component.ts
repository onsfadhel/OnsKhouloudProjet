import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ElementRef,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CgiService } from 'src/app/services/cgi.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AjouterfactlivintComponent } from '../childfactureslivint/ajouterfactlivint/ajouterfactlivint.component';
@Component({
  selector: 'app-facturelivraisonintrant',
  templateUrl: './facturelivraisonintrant.component.html',
  styleUrls: ['./facturelivraisonintrant.component.css']
})
export class FacturelivraisonintrantComponent implements OnInit {
  facturesli=[{id:'',numfact:'',date:'',intrant:'',qte:'',prixunitaire:'',prixtotal:'',modal_liv:'',echeance:'',observation:''}];
  sideBarOpen=true;
  p:number=1;
  numfacture:any;
  @ViewChild('htmlData') htmlData!: ElementRef;
  opened=false;
  constructor(private http: HttpClient,private api: CgiService,private router: Router,private dialog: MatDialog) {
    this.getFactsli();
  }
  title = 'file-download';
  public downloadFile(): void{
    let DATA: any=document.getElementById('htmlData');

    html2canvas(DATA).then((canvas) =>{
      let fileWidth = 208;
      let fileHeight = (canvas.height* fileWidth) / canvas.width;

      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF();
      PDF.text('CotonTchaD - Société Cotonniére du Tchad ',45,10);

      let position =25;
      PDF.addImage(FILEURI,'PNG',0,position,fileWidth,fileHeight);
      PDF.text('Email: secret.dg@cotontchad.com',5,200);
      PDF.save('liste des bordereaux de livraison CTD.pdf')
    });

  }



  search(){
    if(this.numfacture == ""){
      this.getFactsli();
    }else{
      this.facturesli= this.facturesli.filter(res =>{
        return res.numfact.toLocaleLowerCase().match(this.numfacture.toLocaleLowerCase());
      })
    }
  }
  openDialog() {
    this.dialog.open(AjouterfactlivintComponent, {
      width:'480px'
    });
  }

  getFactsli =() => {
    this.api.getAllFactures().subscribe(
      data => {
        this.facturesli=data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteFactli(BordliId: any){
    let baseurl = "http://127.0.0.1:8000/";

    this.http.delete(baseurl +'facturelivraisonintrant/'+BordliId+ '/').subscribe(
      data => {
        this.getFactsli();
      }, error =>{
        console.log(error)
      });
  }

  onSelect(bordli:any){
    this.router.navigate(['/modifierfactureLivraisonintrant',bordli.id]);
  }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  gopdf(bordereau : any){
    this.router.navigate(['/downloadFacturelivraisonintrant',bordereau.id]);
  }
}
