import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoEditarComponent } from './produto-editar/produto-editar.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoComponent } from './produtoComponete/produto.component';

const routes: Routes = [

  { path: 'produto', component: ProdutoComponent },
  { path: 'produto/:id', component: ProdutoComponent },
  { path: 'produto-lista', component: ProdutoListaComponent },
  { path: 'produto-editar', component: ProdutoEditarComponent},
  { path: 'produto-editar/:id', component: ProdutoEditarComponent}
  

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class ProdutoRoutingModule {}