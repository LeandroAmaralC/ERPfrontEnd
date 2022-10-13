import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrcamentoForm} from './orcamento-form.ts/orcamento-form.'
import { OrcamentoRoutingModule  } from './orcamentos-routing.module'

@NgModule({
  declarations: [
   OrcamentoForm

  ],
  imports: [
    CommonModule,
    FormsModule, 
    OrcamentoRoutingModule
    
  ], exports: [

    OrcamentoForm
    
  ]
})
export class OrcamentoModule { }