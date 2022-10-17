import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrcamentoForm} from './orcamento-form/orcamento-form'
import { OrcamentoRoutingModule  } from './orcamentos-routing.module'
import { OrcamentoListaComponent } from './orcamento-lista/orcamento-lista.component';

@NgModule({
  declarations: [
   OrcamentoForm,
   OrcamentoListaComponent

  ],
  imports: [
    CommonModule,
    FormsModule, 
    OrcamentoRoutingModule
    
  ], exports: [

    OrcamentoForm,
    OrcamentoListaComponent
    
  ]
})
export class OrcamentoModule { }