import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { CurrentComponent } from 'app/current/current.component';
import { VoltageComponent } from 'app/voltage/voltage.component';
import { FrequencyComponent } from 'app/frequency/frequency.component';
import { PowerComponent } from 'app/power/power.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FaultComponent } from 'app/fault/fault.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    CurrentComponent,
    VoltageComponent,
    FrequencyComponent,
    PowerComponent,
    FaultComponent
  ]
})

export class AdminLayoutModule {}
