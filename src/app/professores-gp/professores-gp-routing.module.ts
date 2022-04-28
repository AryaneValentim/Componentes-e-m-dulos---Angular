import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGpComponent } from './listar-gp/listar-gp.component';
import { ProfGpFormComponent } from './prof-gp-form/prof-gp-form.component';

const routes: Routes = [
  {path: 'professores-gp', component: ListarGpComponent},
  {path: 'professores-gp/criar', component: ProfGpFormComponent},
  {path: 'professores-gp/editar/:id', component:ProfGpFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresGpRoutingModule { }
