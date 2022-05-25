import { HttpClient } from '@angular/common/http';
import { Component, OnInit , Input ,ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import {FlexmonsterPivot} from 'ng-flexmonster';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FacturescotonService } from 'src/app/services/facturescoton.service';
import { AjouterfacturecotonComponent } from '../childfacturescoton/ajouterfacturecoton/ajouterfacturecoton.component';

@Component({
  selector: 'app-facturescoton',
  templateUrl: './facturescoton.component.html',
  styleUrls: ['./facturescoton.component.css']
})
export class FacturescotonComponent implements OnInit {

  factures=[{id:'',num:'', date:'', qte:'',unite:'', prixUnitaire:'',prixTotal:'',nom_AV:''}];
  facture={id:'',num:'', date:'', qte:'',unite:'', prixUnitaire:'',prixTotal:'',nom_AV:''};
  opened=false;
  p:number=1;
  sideBarOpen=true;
  numfacture:any;
  @ViewChild('htmlData') htmlData!: ElementRef;
  constructor(private http: HttpClient,private api:FacturescotonService,private router: Router,private dialog: MatDialog) {
    this.getFactures();

  }

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
      PDF.save('liste des factures CTD.pdf')
    });

  }
  search(){
    if(this.numfacture == ""){
      this.getFactures();
    }else{
      this.factures = this.factures.filter(res =>{
        return res.num.toLocaleLowerCase().match(this.numfacture.toLocaleLowerCase());
      })
    }
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  openDialog() {
    this.dialog.open(AjouterfacturecotonComponent, {
      width:'480px'
    });
  }

  getFactures = () => {
    this.api.getAllFactures().subscribe(
      data => {
        this.factures=data.results;
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteFacture(FactureId :any){
    let baseurl = "http://127.0.0.1:8000/";

    this.http.delete(baseurl +'facturescoton/'+FactureId+ '/').subscribe(
      data => {
        this.getFactures();
      }, error =>{
        console.log(error)
      });

  }

  onSelect(facture:any){
    this.router.navigate(['/modifierfacturecoton',facture.id]);
  }

  ngOnInit(): void {
  }
  gopdf(facture : any){
    this.router.navigate(['/downloadFactureCoton',facture.id]);
  }



}
