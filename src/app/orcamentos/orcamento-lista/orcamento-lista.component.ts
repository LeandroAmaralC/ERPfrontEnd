import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrcamentoService } from 'src/app/service/orcamentos.service';
import { Orcamento } from '../../model/orcamentos'

@Component({
  selector: 'app-orcamento-lista',
  templateUrl: './orcamento-lista.component.html',
  styleUrls: ['./orcamento-lista.component.css']
})
export class OrcamentoListaComponent implements OnInit {

  listaOrcamentos : Orcamento[] = [];
  mensagemSucesso: string;
  mensagemErro: string;
  orcamentoSelecionado: Orcamento;

  constructor(
    private service: OrcamentoService,
    private router: Router ) { }


  ngOnInit(): void {
    this.service
    .getOrcamento()
    .subscribe ( resposta => this.listaOrcamentos = resposta );
  }

  novoCadastro(){
    this.router.navigate(['orcamento'])
  }



prepararDelecao(orcamento: Orcamento){
  this.orcamentoSelecionado = orcamento

}
  
  deletarOrcamento(){
    this.service
    .deletar(this.orcamentoSelecionado)
    .subscribe(
      response => this.mensagemSucesso = 'Orcamento deletado com Sucesso!',
      erro => this.mensagemErro = 'Ocorreu um erro ao deletar o Orcamento!'
    )

    }

}
