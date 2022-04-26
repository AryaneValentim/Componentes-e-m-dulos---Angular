import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessoresGpRoutingModule } from './professores-gp-routing.module';
import { ListarGpComponent } from './listar-gp/listar-gp.component';
import { ProfGpFormComponent } from './prof-gp-form/prof-gp-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListarGpComponent,
    ProfGpFormComponent
  ],
  imports: [
    CommonModule,
    ProfessoresGpRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports:
  [
    ListarGpComponent
  ]

})
export class ProfessoresGpModule { }
