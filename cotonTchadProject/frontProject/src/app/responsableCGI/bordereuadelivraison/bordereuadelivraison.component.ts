import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ViewChild , ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CgiService } from 'src/app/services/cgi.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { AjouterborderelivComponent } from '../childbordereauxliv/ajouterbordereliv/ajouterbordereliv.component';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-bordereuadelivraison',
  templateUrl: './bordereuadelivraison.component.html',
  styleUrls: ['./bordereuadelivraison.component.css']
})
export class BordereuadelivraisonComponent implements OnInit {
  sideBarOpen=true;
  p:number=1;
  numbordereau:any;
  @ViewChild('htmlData') htmlData!: ElementRef;
  bordsli=[{id:'',num:'',date:'',designation:'',qte:'',model_liv:'',model_paie:'',date_paie:'',date_liv:''}];
  bordli={id:'',num:'',date:'',designation:'',qte:'',model_liv:'',model_paie:'',date_paie:'',date_liv:''};
  opened=false;
  constructor(private http: HttpClient,private api: CgiService,private router: Router,private dialog: MatDialog) {
    this.getBordsli();
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
    if(this.numbordereau == ""){
      this.getBordsli();
    }else{
      this.bordsli = this.bordsli.filter(res =>{
        return res.num.toLocaleLowerCase().match(this.numbordereau.toLocaleLowerCase());
      })
    }
  }
  openDialog() {
    this.dialog.open(AjouterborderelivComponent, {
      width:'480px'
    });
  }

  getBordsli =() => {
    this.api.getAllBordsli().subscribe(
      data => {
        this.bordsli=data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteBordli(BordliId: any){
    let baseurl = "http://127.0.0.1:8000/";

    this.http.delete(baseurl +'bordereauxdelivraisondesintrants/'+BordliId+ '/').subscribe(
      data => {
        this.getBordsli();
      }, error =>{
        console.log(error)
      });
  }

  onSelect(bordli:any){
    this.router.navigate(['/formulaire-modifBordereaux',bordli.id]);
  }

  ngOnInit(): void {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  gopdf(bordereau : any){
    this.router.navigate(['/downloadBordereauLiv',bordereau.id]);
  }
}
