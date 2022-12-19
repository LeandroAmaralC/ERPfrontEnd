import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './produtoComponete/produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';


@NgModule({
  declarations: [
   ProdutoComponent,
   ProdutoListaComponent,
   ProdutoEditarComponent

  ],
  imports: [
    CommonModule,
    FormsModule, 
    ProdutoRoutingModule
    
  ], exports: [

    ProdutoComponent,
    ProdutoListaComponent
    
  ]
})
export class ProdutoModule { }