import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentoForm } from './orcamento-form.ts/orcamento-form.'

const routes: Routes = [

  { path: 'orcamento', component: OrcamentoForm }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentoRoutingModule { }
