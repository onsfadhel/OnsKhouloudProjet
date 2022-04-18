import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehiculecontentComponent } from './vehiculecontent/vehiculecontent.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { HttpClientModule } from '@angular/common/http';
import { FormulairevehiculeComponent } from './childVehicule/formulairevehicule/formulairevehicule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule}from'@angular/material/core';
import { MatSelectModule} from '@angular/material/select';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatIconModule} from '@angular/material/icon';
import { AngularSplitModule } from 'angular-split';
import { FormsModule } from '@angular/forms';
import { FormulairemodificationComponent } from './childVehicule/formulairemodification/formulairemodification.component';
import { LoginComponent } from './login/login.component';
import { NgSrcModule } from 'ng-src';
import { FormulaireajouterComponent } from './childChauffeur/formulaireajouter/formulaireajouter.component';
import { FormulairemodifierComponent } from './childChauffeur/formulairemodifier/formulairemodifier.component';
import { UtilisateursComponent } from './administrateur/utilisateurs/utilisateurs.component';
import { UsinesComponent } from './administrateur/usines/usines.component';
import { AjouterutilisateurComponent } from './administrateur/childutilisateur/ajouterutilisateur/ajouterutilisateur.component';
import { ModifierutilisateurComponent } from './administrateur/childutilisateur/modifierutilisateur/modifierutilisateur.component';
import { AjouterUsineComponent } from './administrateur/childUsine/ajouter-usine/ajouter-usine.component';
import { ModifierUsineComponent } from './administrateur/childUsine/modifier-usine/modifier-usine.component';
import { ResetemailComponent } from './resetemail/resetemail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { BordereauxComponent } from './bordereauxdutransport/bordereaux/bordereaux.component';
import { AjouterbordereauxComponent } from './bordereauxdutransport/childbordereaux/ajouterbordereaux/ajouterbordereaux.component';
import { ModifierborderauxComponent } from './bordereauxdutransport/childbordereaux/modifierborderaux/modifierborderaux.component';
import { BordereauxpdfComponent } from './bordereauxdutransport/childbordereaux/bordereauxpdf/bordereauxpdf.component';
import { TransactionsComponent } from './transactions/transactions/transactions.component';
import { AjoutertransactionComponent } from './transactions/childTransaction/ajoutertransaction/ajoutertransaction.component';
import { ModifiertransactionComponent } from './transactions/childTransaction/modifiertransaction/modifiertransaction.component';
import { HeaderComponent } from './header/header.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { PiechartComponent } from './dash/charts/piechart/piechart.component';
import { CardsComponent } from './dash/charts/cards/cards.component';
import { SidenavproductionComponent } from './responsableProduction/sidenavproduction/sidenavproduction.component';
import { ProduitsComponent } from './responsableProduction/produits/produits.component';
import { AjouterproduitComponent } from './responsableProduction/childproduits/ajouterproduit/ajouterproduit.component';
import { ModifierproduitComponent } from './responsableProduction/childproduits/modifierproduit/modifierproduit.component';
import { ClientsComponent } from './responsableProduction/clients/clients/clients.component';
import { AjouterclientComponent } from './responsableProduction/clients/childClients/ajouterclient/ajouterclient.component';
import { ModifierClientComponent } from './responsableProduction/clients/childClients/modifier-client/modifier-client.component';
import { FactureProductionComponent } from './responsableProduction/facture/facture-production/facture-production.component';
import { AjouterFactureProductionComponent } from './responsableProduction/facture/childFacture/ajouter-facture-production/ajouter-facture-production.component';
import { ModifierFactureProductionComponent } from './responsableProduction/facture/childFacture/modifier-facture-production/modifier-facture-production.component';
import { SidenavbaradminComponent } from './administrateur/sidenavbaradmin/sidenavbaradmin.component';
import { DownloadFactureProductionComponent } from './responsableProduction/facture/childFacture/download-facture-production/download-facture-production.component';
@NgModule({
  declarations: [
    AppComponent,
    VehiculecontentComponent,
    ChauffeurComponent,
    FormulairevehiculeComponent,
    FormulairemodificationComponent,
    LoginComponent,
    FormulaireajouterComponent,
    FormulairemodifierComponent,
    UtilisateursComponent,
    UsinesComponent,
    AjouterutilisateurComponent,
    ModifierutilisateurComponent,
    AjouterUsineComponent,
    ModifierUsineComponent,
    ResetemailComponent,
    ResetpasswordComponent,
    BordereauxComponent,
    AjouterbordereauxComponent,
    ModifierborderauxComponent,
    BordereauxpdfComponent,
    TransactionsComponent,
    AjoutertransactionComponent,
    ModifiertransactionComponent,
    HeaderComponent,
    SidenavbarComponent,
    DashboardComponent,
    PiechartComponent,
    CardsComponent,
    SidenavproductionComponent,
    ProduitsComponent,
    AjouterproduitComponent,
    ModifierproduitComponent,
    ClientsComponent,
    AjouterclientComponent,
    ModifierClientComponent,
    FactureProductionComponent,
    AjouterFactureProductionComponent,
    ModifierFactureProductionComponent,
    SidenavbaradminComponent,
    DownloadFactureProductionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgSrcModule,
    MatMenuModule,
    MatDialogModule,
    HighchartsChartModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatGridListModule ,
    MatIconModule,
    AngularSplitModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
