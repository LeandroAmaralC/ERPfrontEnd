import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Orcamento } from '../model/orcamentos';
import { Observable } from 'rxjs';
import { environment } from '../.././environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  apiURL: string = environment.apiURLBase + '/api/orcamentos';

  constructor(private http: HttpClient) { }

   salvar( orcamento: Orcamento ) : Observable<Orcamento> {
     return this.http.post<Orcamento>(`${this.apiURL}`, orcamento);
   }
  

   atualizar( orcamento: Orcamento ) : Observable<any> {
    return this.http.put<Orcamento>(`${this.apiURL}/${orcamento.id}`, orcamento);
  }

 getOrcamento() : Observable<Orcamento[]> {
  return this.http.get<Orcamento[]>(`${this.apiURL}/obterTodos`);
 } 

 getOrcamentoById(id: number) : Observable<Orcamento> {
  return this.http.get<any>(`${this.apiURL}/acharPorID/${id}`);
 }

 deletar(orcamento: Orcamento) : Observable<any> {
  return this.http.delete<any>(`${this.apiURL}/${orcamento.id}`);
}
 } 

 /*
getClientes() : Cliente[]{
  let cliente = new Cliente();
  cliente.id = 1;
  cliente.nome = 'Fulano' ;
  cliente.dataCadastro = '07/07/2022'
  cliente.cpf =  '12345678900'
  return [cliente]
} */

