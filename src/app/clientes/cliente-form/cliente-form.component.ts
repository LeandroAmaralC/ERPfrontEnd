import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Cliente } from '../../model/clientes';
import { ClientesService  } from '../../service/clientes.service'

@Component({
  selector: 'app-clientes-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  constructor(
    private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Cliente();

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(x => {

      if (x && x.id) {
        this.service.getClienteByID(x.id).subscribe(response => {
          this.cliente = response;
        });
      }
    });
  }

  voltarParaListagem() {
    this.router.navigate(['clientes-lista'])
  }

  onSubmit() {


      this.service
        .salvar(this.cliente)
        .subscribe(response => {
          this.success = true;
          this.errors.push('');
          this.cliente = response;
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;
           })
    
  }

}
