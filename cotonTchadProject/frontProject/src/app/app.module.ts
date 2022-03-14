import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResponsablelogistiqueComponent } from './responsablelogistique/responsablelogistique.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { VehiculecontentComponent } from './vehiculecontent/vehiculecontent.component';
import { ChauffeurComponent } from './chauffeur/chauffeur.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormulairevehiculeComponent } from './childVehicule/formulairevehicule/formulairevehicule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FormulairemodificationComponent } from './childVehicule/formulairemodification/formulairemodification.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    ResponsablelogistiqueComponent,
    VehiculeComponent,
    VehiculecontentComponent,
    ChauffeurComponent,
    HeaderComponent,
    FormulairevehiculeComponent,
    FormulairemodificationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
