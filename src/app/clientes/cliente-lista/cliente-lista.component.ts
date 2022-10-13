import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ClientesService } from '../../service/clientes.service';
import { Cliente } from '../../model/clientes';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[] = [];
  clienteSelecionado: Cliente;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(
    private service: ClientesService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getClientes()
    .subscribe ( resposta => this.clientes = resposta );
  } 

  novoCadastro(){
    this.router.navigate(['clientes'])
  }

  preparaDelecao(cliente: Cliente) {
    this.clienteSelecionado = cliente;
  }

  deletarCliente(){
    this.service
    .deletar(this.clienteSelecionado)
    .subscribe(
       response => this.mensagemSucesso = 'Cliente deletado com Sucesso!',
       erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
       )
  }

}
