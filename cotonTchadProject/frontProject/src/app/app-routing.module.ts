import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { FormulairevehiculeComponent } from './childVehicule/formulairevehicule/formulairevehicule.component';
import { ResponsablelogistiqueComponent } from './responsablelogistique/responsablelogistique.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { VehiculecontentComponent } from './vehiculecontent/vehiculecontent.component';

const routes: Routes = [
  {path:'responsablelogistique',component:ResponsablelogistiqueComponent},
  {path:'vehicule',component:VehiculecontentComponent},
  {path:'chauffeur', component:ChauffeurComponent},
  {path:'FormulaireVehicule',component:FormulairevehiculeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
