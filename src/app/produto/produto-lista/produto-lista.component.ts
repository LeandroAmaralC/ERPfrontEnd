import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

produtos: Produto[] = [];
produtoSelecionado: Produto;
mensagemSucesso: string;
mensagemErro: string;

  constructor(
    private service: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
    .getProduto()
    .subscribe ( resposta => this.produtos = resposta );
  } 

  novoCadastro(){
    this.router.navigate(['produto'])
  }

  preparaDelecao(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  deletarCliente(){
    this.service
    .deletar(this.produtoSelecionado)
    .subscribe(
       response => this.mensagemSucesso = 'Cliente deletado com Sucesso!',
       erro => this.mensagemErro = 'Ocorreu um erro ao deletar o cliente.'
       )
  }

}



