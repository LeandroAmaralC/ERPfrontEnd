import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentoForm } from './orcamento-form/orcamento-form'
import { OrcamentoListaComponent } from './orcamento-lista/orcamento-lista.component';

const routes: Routes = [

  { path: 'orcamento', component: OrcamentoForm },
  { path: 'orcamento-lista', component: OrcamentoListaComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentoRoutingModule { }
