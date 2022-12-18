import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/clientes';
import { Orcamento } from 'src/app/model/orcamentos';
import { ClientesService } from 'src/app/service/clientes.service';
import { OrcamentoService } from '../../service/orcamentos.service';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-orcamento-form',
  templateUrl: './orcamento-form.html',
  styleUrls: ['./orcamento-form.css'],
})
export class OrcamentoForm implements OnInit {
  cliente: Cliente = new Cliente;
  orcamento: Orcamento = new Orcamento;
  produto: Produto = new Produto;
  success: boolean = false;
  errors: String[];
  id: Number;

  constructor(
    private service: OrcamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private orcamentoService: OrcamentoService,
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(x => {
    //   if (x && x.id) {
    //     this.service.getOrcamentoById(x.id).subscribe(response => {
    //       this.orcamento = response;
  }

  voltarParaListagem() {
    this.router.navigate(['orcamento-lista']);
  }

  buscarPorCPF() {
    this.cliente;
    this.clienteService
      .getClienteByCPF(this.cliente.cpf)
      .subscribe((response) => (this.cliente = response));
  }

  buscarProdutoID(){
   this.orcamento;
   this.orcamentoService
   .getOrcamentoById(this.orcamento.id)
   .subscribe((response) => (this.orcamento = response));
  }

buscarPorProduto(){
  this.produto;
  this.produtoService
  .getProdutoById(this.produto.id)
  .subscribe((response) => (this.produto = response));
}


  //   this.activatedRoute.params.subscribe(x => {

  //     if (x && x.id) {
  //       this.service.(x.id).subscribe(response => {
  //         this.orcamento = response;
  //       });
  //     }
  //   });
  // }

  testarBotao() {
    this.router.navigate(['orcamento-lista']);
  }

  onSubmit() {
    this.service.salvar(this.orcamento).subscribe(
      (response) => {
        this.success = true;
        this.errors.push('');
        this.orcamento = response;
      },
      (errorResponse) => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      }
    );
  }
}
