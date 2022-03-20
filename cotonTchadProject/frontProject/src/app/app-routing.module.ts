import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsinesComponent } from './administrateur/usines/usines.component';
import { UtilisateursComponent } from './administrateur/utilisateurs/utilisateurs.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { FormulaireajouterComponent } from './childChauffeur/formulaireajouter/formulaireajouter.component';
import { FormulairemodifierComponent } from './childChauffeur/formulairemodifier/formulairemodifier.component';
import { FormulairemodificationComponent } from './childVehicule/formulairemodification/formulairemodification.component';
import { FormulairevehiculeComponent } from './childVehicule/formulairevehicule/formulairevehicule.component';
import { LoginComponent } from './login/login.component';
import { VehiculecontentComponent } from './vehiculecontent/vehiculecontent.component';

const routes: Routes = [
  {path:'responsablelogistique',component:VehiculecontentComponent},
  {path:'vehicule',component:VehiculecontentComponent},
  {path:'chauffeur', component:ChauffeurComponent},
  {path:'FormulaireVehicule',component:FormulairevehiculeComponent},
  {path:'FormulaireModificationVehicule/:id',component:FormulairemodificationComponent},
  {path:'login',component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"ajouterChauffeur",component:FormulaireajouterComponent},
  {path:'modifierChauffeur/:id',component:FormulairemodifierComponent},
  {path:'admin/usines',component:UsinesComponent},
  {path:'admin/utilisateurs',component:UtilisateursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
