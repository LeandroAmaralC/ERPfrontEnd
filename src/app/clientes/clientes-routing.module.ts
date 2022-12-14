import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormComponent } from './cliente-form/cliente-form.component'
import { ClienteListaComponent} from './cliente-lista/cliente-lista.component'

const routes: Routes = [

  { path: 'clientes', component: ClienteFormComponent },
  { path: 'clientes/:id', component: ClienteFormComponent },
  { path: 'clientes-lista' , component: ClienteListaComponent  }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
