import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from "src/app/shared/shared.module";
import { AgGridModule } from 'ag-grid-angular';
import { CountToModule } from 'angular-count-to';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AgGridModule,
    SharedModule,
    CountToModule,
    Ng2GoogleChartsModule
]   
})
export class DashboardModule { }
