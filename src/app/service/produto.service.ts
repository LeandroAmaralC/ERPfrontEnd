
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Orcamento } from '../model/orcamentos';
import { Observable } from 'rxjs';
import { environment } from '../.././environments/environment'
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiURL: string = environment.apiURLBase + '/api/produto';

  constructor(private http: HttpClient) { }

   salvar( produto: Produto ) : Observable<Produto> {
     return this.http.post<Produto>(`${this.apiURL}`, produto);
   }
  

   atualizar( produto: Produto ) : Observable<any> {
    return this.http.put<Produto>(`${this.apiURL}/${produto.id}`, produto);
  }

 getProduto() : Observable<Produto[]> {
  return this.http.get<Produto[]>(`${this.apiURL}/obterTodos`);
 } 

 getProdutoById(id: number) : Observable<Produto> {
  return this.http.get<any>(`${this.apiURL}/acharPorID/${id}`);
 }

 deletar(produto: Produto) : Observable<any> {
  return this.http.delete<any>(`${this.apiURL}/${produto.id}`);
}
 } 