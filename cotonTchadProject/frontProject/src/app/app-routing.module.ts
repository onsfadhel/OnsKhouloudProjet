import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ModifierUsineComponent } from './administrateur/childUsine/modifier-usine/modifier-usine.component';
import { ModifierutilisateurComponent } from './administrateur/childutilisateur/modifierutilisateur/modifierutilisateur.component';
import { UsinesComponent } from './administrateur/usines/usines.component';
import { UtilisateursComponent } from './administrateur/utilisateurs/utilisateurs.component';
import { BordereauxComponent } from './bordereauxdutransport/bordereaux/bordereaux.component';
import { BordereauxpdfComponent } from './bordereauxdutransport/childbordereaux/bordereauxpdf/bordereauxpdf.component';
import { ModifierborderauxComponent } from './bordereauxdutransport/childbordereaux/modifierborderaux/modifierborderaux.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { FormulaireajouterComponent } from './childChauffeur/formulaireajouter/formulaireajouter.component';
import { FormulairemodifierComponent } from './childChauffeur/formulairemodifier/formulairemodifier.component';
import { FormulairemodificationComponent } from './childVehicule/formulairemodification/formulairemodification.component';
import { FormulairevehiculeComponent } from './childVehicule/formulairevehicule/formulairevehicule.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { EnvoismsComponent } from './envoisms/envoisms.component';
import { LoginComponent } from './login/login.component';
import { ResetemailComponent } from './resetemail/resetemail.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ModifierventeComponent } from './responsableFinancier/childventeproduit/modifiervente/modifiervente.component';
import { VenteproduitComponent } from './responsableFinancier/venteproduit/venteproduit.component';
import { ModifierstockComponent } from './responsableProduction/childstock/modifierstock/modifierstock.component';
import { ModifierClientComponent } from './responsableFinancier/clients/childClients/modifier-client/modifier-client.component';
import { ClientsComponent } from './responsableFinancier/clients/clients/clients.component';
import { DashproductionComponent } from './responsableProduction/dashboard/dashproduction/dashproduction.component';
import { DownloadFactureProductionComponent } from './responsableFinancier/facture/childFacture/download-facture-production/download-facture-production.component';
import { ModifierFactureProductionComponent } from './responsableFinancier/facture/childFacture/modifier-facture-production/modifier-facture-production.component';
import { FactureProductionComponent } from './responsableFinancier/facture/facture-production/facture-production.component';
import { StockproduitsComponent } from './responsableProduction/stockproduits/stockproduits.component';
import { ModifiertransactionComponent } from './transactions/childTransaction/modifiertransaction/modifiertransaction.component';
import { TransactionsComponent } from './transactions/transactions/transactions.component';
import { VehiculecontentComponent } from './vehiculecontent/vehiculecontent.component';
import { DashboardfinancierComponent } from './responsableFinancier/dashboard/dashboardfinancier/dashboardfinancier.component';
import { TicketsdepeseComponent } from './responsabledepontbascule/ticketsdepese/ticketsdepese.component';
import { ConsultervehiculesComponent } from './responsabledepontbascule/consultervehicules/consultervehicules.component';
import { ModifierticketComponent } from './responsabledepontbascule/childtickets/modifierticket/modifierticket.component';
import { ConsulterprofileComponent } from './profile/consulterprofile/consulterprofile.component';
import { ModifierprofileComponent } from './profile/modifierprofile/modifierprofile.component';
import { BesoinsComponent } from './cozoc/besoins/besoins.component';
import { ModifierbesoinComponent } from './cozoc/childbesoin/modifierbesoin/modifierbesoin.component';
import { FacturescotonComponent } from './cozoc/facturescoton/facturescoton.component';
import { ModifierfacturecotonComponent } from './cozoc/childfacturescoton/modifierfacturecoton/modifierfacturecoton.component';
import { BordereuadelivraisonComponent } from './responsableCGI/bordereuadelivraison/bordereuadelivraison.component';
import { ModifierbordlivComponent } from './responsableCGI/childbordereauxliv/modifierbordliv/modifierbordliv.component';
import { DownloadbordereaulivComponent } from './responsableCGI/childbordereauxliv/downloadbordereauliv/downloadbordereauliv.component';
import { DownloadfacturecotonComponent } from './cozoc/childfacturescoton/downloadfacturecoton/downloadfacturecoton.component';
import { FacturelivraisonintrantComponent } from './responsableCGI/facturelivraisonintrant/facturelivraisonintrant.component';
import { ModifierfacturelivintComponent } from './responsableCGI/childfactureslivint/modifierfacturelivint/modifierfacturelivint.component';
import { DownloadfacturelivintComponent } from './responsableCGI/childfactureslivint/downloadfacturelivint/downloadfacturelivint.component';
import { StockcotonComponent } from './cozoc/stockcoton/stockcoton.component';
import { ModifierstockcotonComponent } from './cozoc/childstockcoton/modifierstockcoton/modifierstockcoton.component';
import { DashboardcozocComponent } from './cozoc/dashboardcozoc/dashboardcozoc.component';

const routes: Routes = [
  {path:'responsablelogistique',component:VehiculecontentComponent},
  {path:'vehicule',component:VehiculecontentComponent},
  {path:'chauffeur', component:ChauffeurComponent},
  {path:'FormulaireVehicule',component:FormulairevehiculeComponent},
  {path:'FormulaireModificationVehicule/:id',component:FormulairemodificationComponent},
  {path:'login',component:LoginComponent},
  {path:'admin/usines/ModifierUsine/:id',component:ModifierUsineComponent},
  {path:"ajouterChauffeur",component:FormulaireajouterComponent},
  {path:'modifierChauffeur/:id',component:FormulairemodifierComponent},
  {path:'admin/usines',component:UsinesComponent},
  {path:'admin/utilisateurs',component:UtilisateursComponent},
  {path:'admin/utilisateur/modifier/:id',component:ModifierutilisateurComponent},
  {path:"",component:LoginComponent},
  {path:'resetemail',component:ResetemailComponent},
  {path:'resetpassword/password-reset/:uidb64/:token',component:ResetpasswordComponent},
  {path:'bordereaux',component: BordereauxComponent},
  {path:'modifierBordereau/:id',component:ModifierborderauxComponent},
  {path:'pdf/:id',component:BordereauxpdfComponent},
  {path:'transactions',component:TransactionsComponent},
  {path:'modifierTransaction/:id',component:ModifiertransactionComponent},
  {path:'highcharts', component: HighchartsChartComponent},
  {path:'dashboardLogistique',component: DashboardComponent},
  {path:'responsableFinancier/venteproduits', component:VenteproduitComponent},
  {path:'modifierventeproduit/:id', component:ModifierventeComponent},
  {path:'clients',component: ClientsComponent},
  {path:'modifierclient/:id',component: ModifierClientComponent},
  {path: 'facturesdeventes', component: FactureProductionComponent},
  {path:'modifierfactureProduction/:id',component:ModifierFactureProductionComponent},
  {path:'downloadFactureProduction/:id',component: DownloadFactureProductionComponent},
  {path:'codeconnexion',component:EnvoismsComponent},
  {path:'responsabledeproduction/stockproduits',component:StockproduitsComponent},
  {path:'modifierstock/:id',component: ModifierstockComponent},
  {path:'dashboardProduction',component:DashproductionComponent},
  {path:'dashboardFinanacier',component:DashboardfinancierComponent},
  {path:'responsableDePontBascule/ticketsdepese',component:TicketsdepeseComponent},
  {path:'consulterlesvehicules',component:ConsultervehiculesComponent},
  {path:'modifierticket/:id',component:ModifierticketComponent},
  {path:'consulterprofile',component:ConsulterprofileComponent},
  {path:'modifierprofile',component:ModifierprofileComponent},
  {path:'cozoc/besoins',component:BesoinsComponent},
  {path:'modifierbesoin/:id',component:ModifierbesoinComponent},
  {path:'facturescotoncollecte',component:FacturescotonComponent},
  {path:'modifierfacturecoton/:id',component:ModifierfacturecotonComponent},
  {path:'responsableCGI/bordereuadelivraison',component:BordereuadelivraisonComponent},
  {path:'formulaire-modifBordereaux/:id',component:ModifierbordlivComponent},
  {path:'downloadBordereauLiv/:id',component:DownloadbordereaulivComponent},
  {path:'downloadFactureCoton/:id',component:DownloadfacturecotonComponent},
  {path:'facturelivraisonintrant',component:FacturelivraisonintrantComponent},
  {path:'modifierfactureLivraisonintrant/:id',component:ModifierfacturelivintComponent},
  {path:'downloadFacturelivraisonintrant/:id',component:DownloadfacturelivintComponent},
  {path:'stockcoton',component:StockcotonComponent},
  {path:'modifierstockcotoncollecte/:id',component:ModifierstockcotonComponent},
  {path:'dashboardcozoc',component:DashboardcozocComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
