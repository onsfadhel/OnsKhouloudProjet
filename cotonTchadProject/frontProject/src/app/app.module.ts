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
import { Ng2SearchPipeModule } from 'ng2-search-filter';
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
import { NgxPaginationModule } from 'ngx-pagination';
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
import { ClientsComponent } from './responsableFinancier/clients/clients/clients.component';
import { AjouterclientComponent } from './responsableFinancier/clients/childClients/ajouterclient/ajouterclient.component';
import { ModifierClientComponent } from './responsableFinancier/clients/childClients/modifier-client/modifier-client.component';
import { FactureProductionComponent } from './responsableFinancier/facture/facture-production/facture-production.component';
import { AjouterFactureProductionComponent } from './responsableFinancier/facture/childFacture/ajouter-facture-production/ajouter-facture-production.component';
import { ModifierFactureProductionComponent } from './responsableFinancier/facture/childFacture/modifier-facture-production/modifier-facture-production.component';
import { SidenavbaradminComponent } from './administrateur/sidenavbaradmin/sidenavbaradmin.component';
import { DownloadFactureProductionComponent } from './responsableFinancier/facture/childFacture/download-facture-production/download-facture-production.component';
import { EnvoismsComponent } from './envoisms/envoisms.component';
import { StockproduitsComponent } from './responsableProduction/stockproduits/stockproduits.component';
import { ModifierstockComponent } from './responsableProduction/childstock/modifierstock/modifierstock.component';
import { AjouterstockComponent } from './responsableProduction/childstock/ajouterstock/ajouterstock.component';
import { DashproductionComponent } from './responsableProduction/dashboard/dashproduction/dashproduction.component';
import { StackedareaComponent } from './responsableProduction/dashboard/stackedarea/stackedarea.component';
import { BarchartdashComponent } from './responsableProduction/dashboard/barchartdash/barchartdash.component';
import { SidenavfinancierComponent } from './responsableFinancier/sidenavfinancier/sidenavfinancier.component';
import { VenteproduitComponent } from './responsableFinancier/venteproduit/venteproduit.component';
import { AjouterventeComponent } from './responsableFinancier/childventeproduit/ajoutervente/ajoutervente.component';
import { ModifierventeComponent } from './responsableFinancier/childventeproduit/modifiervente/modifiervente.component';
import { DashboardfinancierComponent } from './responsableFinancier/dashboard/dashboardfinancier/dashboardfinancier.component';
import { StackareafinancierComponent } from './responsableFinancier/dashboard/stackareafinancier/stackareafinancier.component';
import { PiechartfinancierComponent } from './responsableFinancier/dashboard/piechartfinancier/piechartfinancier.component';
import { TicketsdepeseComponent } from './responsabledepontbascule/ticketsdepese/ticketsdepese.component';
import { SidenavpontbasculeComponent } from './responsabledepontbascule/sidenavpontbascule/sidenavpontbascule.component';
import { ConsultervehiculesComponent } from './responsabledepontbascule/consultervehicules/consultervehicules.component';
import { AjouterticketComponent } from './responsabledepontbascule/childtickets/ajouterticket/ajouterticket.component';
import { ModifierticketComponent } from './responsabledepontbascule/childtickets/modifierticket/modifierticket.component';
import { ConsulterprofileComponent } from './profile/consulterprofile/consulterprofile.component';
import { ModifierprofileComponent } from './profile/modifierprofile/modifierprofile.component';
import { BesoinsComponent } from './cozoc/besoins/besoins.component';
import { SidenavcozocComponent } from './cozoc/sidenavcozoc/sidenavcozoc.component';
import { AjouterbesoinComponent } from './cozoc/childbesoin/ajouterbesoin/ajouterbesoin.component';
import { ModifierbesoinComponent } from './cozoc/childbesoin/modifierbesoin/modifierbesoin.component';
import { FacturescotonComponent } from './cozoc/facturescoton/facturescoton.component';
import { FlexmonsterPivotModule } from 'ng-flexmonster';
import { AjouterfacturecotonComponent } from './cozoc/childfacturescoton/ajouterfacturecoton/ajouterfacturecoton.component';
import { ModifierfacturecotonComponent } from './cozoc/childfacturescoton/modifierfacturecoton/modifierfacturecoton.component';
import { BordereuadelivraisonComponent } from './responsableCGI/bordereuadelivraison/bordereuadelivraison.component';
import { SidenavcgiComponent } from './responsableCGI/sidenavcgi/sidenavcgi.component';
import { AjouterborderelivComponent } from './responsableCGI/childbordereauxliv/ajouterbordereliv/ajouterbordereliv.component';
import { ModifierbordlivComponent } from './responsableCGI/childbordereauxliv/modifierbordliv/modifierbordliv.component';
import { DownloadbordereaulivComponent } from './responsableCGI/childbordereauxliv/downloadbordereauliv/downloadbordereauliv.component';
import { DownloadfacturecotonComponent } from './cozoc/childfacturescoton/downloadfacturecoton/downloadfacturecoton.component';
import { FacturelivraisonintrantComponent } from './responsableCGI/facturelivraisonintrant/facturelivraisonintrant.component';
import { AjouterfactlivintComponent } from './responsableCGI/childfactureslivint/ajouterfactlivint/ajouterfactlivint.component';
import { ModifierfacturelivintComponent } from './responsableCGI/childfactureslivint/modifierfacturelivint/modifierfacturelivint.component';
import { DownloadfacturelivintComponent } from './responsableCGI/childfactureslivint/downloadfacturelivint/downloadfacturelivint.component';
import { StockcotonComponent } from './cozoc/stockcoton/stockcoton.component';
import { AjouterstockcotonComponent } from './cozoc/childstockcoton/ajouterstockcoton/ajouterstockcoton.component';
import { ModifierstockcotonComponent } from './cozoc/childstockcoton/modifierstockcoton/modifierstockcoton.component';
import { DashboardcozocComponent } from './cozoc/dashboardcozoc/dashboardcozoc.component';
import { HeaderadminComponent } from './administrateur/headeradmin/headeradmin.component';
import { HeaderlogistiqueComponent } from './headerlogistique/headerlogistique.component';
import { HeaderproductionComponent } from './responsableProduction/headerproduction/headerproduction.component';
import { HeaderfinancierComponent } from './responsableFinancier/headerfinancier/headerfinancier.component';
import { HeaderpontbasculeComponent } from './responsabledepontbascule/headerpontbascule/headerpontbascule.component';
import { HeadercgiComponent } from './responsableCGI/headercgi/headercgi.component';

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
    ClientsComponent,
    AjouterclientComponent,
    ModifierClientComponent,
    FactureProductionComponent,
    AjouterFactureProductionComponent,
    ModifierFactureProductionComponent,
    SidenavbaradminComponent,
    DownloadFactureProductionComponent,
    EnvoismsComponent,
    StockproduitsComponent,
    ModifierstockComponent,
    AjouterstockComponent,
    DashproductionComponent,
    StackedareaComponent,
    BarchartdashComponent,
    SidenavfinancierComponent,
    VenteproduitComponent,
    AjouterventeComponent,
    ModifierventeComponent,
    DashboardfinancierComponent,
    StackareafinancierComponent,
    PiechartfinancierComponent,
    TicketsdepeseComponent,
    SidenavpontbasculeComponent,
    ConsultervehiculesComponent,
    AjouterticketComponent,
    ModifierticketComponent,
    ConsulterprofileComponent,
    ModifierprofileComponent,
    BesoinsComponent,
    SidenavcozocComponent,
    AjouterbesoinComponent,
    ModifierbesoinComponent,
    FacturescotonComponent,
    AjouterfacturecotonComponent,
    ModifierfacturecotonComponent,
    BordereuadelivraisonComponent,
    SidenavcgiComponent,
    AjouterborderelivComponent,
    ModifierbordlivComponent,
    DownloadbordereaulivComponent,
    DownloadfacturecotonComponent,
    FacturelivraisonintrantComponent,
    AjouterfactlivintComponent,
    ModifierfacturelivintComponent,
    DownloadfacturelivintComponent,
    StockcotonComponent,
    AjouterstockcotonComponent,
    ModifierstockcotonComponent,
    DashboardcozocComponent,
    HeaderadminComponent,
    HeaderlogistiqueComponent,
    HeaderproductionComponent,
    HeaderfinancierComponent,
    HeaderpontbasculeComponent,
    HeadercgiComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgSrcModule,
    MatMenuModule,
    MatDialogModule,
    HighchartsChartModule,
    MatSelectModule,
    FlexmonsterPivotModule,
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
