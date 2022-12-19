import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-editar',
  templateUrl: './produto-editar.component.html',
  styleUrls: ['./produto-editar.component.css']
})
export class ProdutoEditarComponent implements OnInit {

  produto:Produto;
  success: boolean = false;
  errors: String[];
  id: number;
  idAnterior: number; 

  constructor(
     private service: ProdutoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.produto = new Produto();

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(x => {

      if (x && x.id) {
        this.service.getProdutoById(x.id).subscribe(response => {
          this.produto = response;
        });
      }
    });
  }

  voltarListagem() {
    this.router.navigate(['produto-lista'])
  }

  atualizar() {
    this.service
    .atualizar(this.produto)
    .subscribe(response => {
      this.success = true;
      this.errors.push('');
      this.produto = response;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    })
  }

  onSubmit() {


    this.service
      .salvar(this.produto)
      .subscribe(response => {
        this.success = true;
        this.errors.push('');
        this.produto = response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
         })
  
}


}
