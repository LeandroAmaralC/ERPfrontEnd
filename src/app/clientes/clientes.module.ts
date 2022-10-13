import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteFormComponent} from './cliente-form/cliente-form.component'
import { ClientesRoutingModule } from './clientes-routing.module'
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component'

@NgModule({
  declarations: [
   ClienteFormComponent,
   ClienteListaComponent

  ],
  imports: [
    CommonModule,
    FormsModule, 
    ClientesRoutingModule
    
  ], exports: [

    ClienteFormComponent,
    ClienteListaComponent
    
  ]
})
export class ClientesModule { }