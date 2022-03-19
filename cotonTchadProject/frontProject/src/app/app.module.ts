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
import { MatIconModule} from '@angular/material/icon';
import { AngularSplitModule } from 'angular-split';
import { FormsModule } from '@angular/forms';
import { FormulairemodificationComponent } from './childVehicule/formulairemodification/formulairemodification.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NgSrcModule } from 'ng-src';
import { FormulaireajouterComponent } from './childChauffeur/formulaireajouter/formulaireajouter.component';
import { FormulairemodifierComponent } from './childChauffeur/formulairemodifier/formulairemodifier.component';
@NgModule({
  declarations: [
    AppComponent,
    VehiculecontentComponent,
    ChauffeurComponent,
    FormulairevehiculeComponent,
    FormulairemodificationComponent,
    LoginComponent,
    HeaderComponent,
    FormulaireajouterComponent,
    FormulairemodifierComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    MatDatepickerModule,
    NgSrcModule,
    MatMenuModule,
    MatDialogModule,
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
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
