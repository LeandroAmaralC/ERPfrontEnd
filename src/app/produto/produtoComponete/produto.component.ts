import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/service/produto.service';
import { Produto } from '../../model/produto';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produto: Produto;
  success: boolean = false;
  errors: String[];
  id: number;

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

  voltarParaListagem() {
    this.router.navigate(['produto-lista'])
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
