import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { OrcamentoModule } from './orcamentos/orcamentos.module';
import { ClientesService} from './service/clientes.service'
import { OrcamentoService} from './service/orcamentos.service';
import { ClientesModule } from './clientes/clientes.module';
import { ProdutoModule } from './produto/produto.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent
    
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    OrcamentoModule,
    ClientesModule,
    ProdutoModule
    
 
  ],
  providers: [
    OrcamentoService,
    ClientesService
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
