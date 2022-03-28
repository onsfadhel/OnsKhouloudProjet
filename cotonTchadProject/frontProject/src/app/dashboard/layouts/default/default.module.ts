import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
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
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { AreaComponent } from '../../charts/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from '../../charts/card/card.component';
import { DashboardService } from 'src/app/services/dashboard.service';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AreaComponent,
    CardComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
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
    HighchartsChartModule,
    MatCardModule, 
  ], 
  providers: [
    DashboardService,
  ]
})
export class DefaultModule { }
