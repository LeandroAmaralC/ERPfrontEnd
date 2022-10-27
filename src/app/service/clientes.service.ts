import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../model/clientes';
import {environment} from '../../environments/environment'

@Injectable({
    providedIn: 'root'
})
export class ClientesService {

    apiURL: string = environment.apiURLBase + '/api/cliente';

    constructor(private http: HttpClient) { }

    salvar( cliente: Cliente ) : Observable<Cliente> {
     return this.http.post<Cliente>(`${this.apiURL}`, cliente);

 }

    getClienteByID(id: number) : Observable<Cliente> {
        return this.http.get<any>(`${this.apiURL}/acharPorID/${id}`);
    }

    getClienteByCPF(cpf: string) : Observable<Cliente> {
        return this.http.get<any>(`${this.apiURL}/acharPorCPF/${cpf}`);
    }

    atualizar( cliente: Cliente ) : Observable<any> {
        return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);
    }

    getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(`${this.apiURL}/obterTodos`);
       } 

       deletar(cliente: Cliente) : Observable<any> {
        return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
      }
}