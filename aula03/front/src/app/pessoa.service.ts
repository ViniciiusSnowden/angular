import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './modelo/Pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  // Construtor
  constructor(private http:HttpClient) { }

  // Listar todas as pessoas
  listar():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>('http://localhost:3000/pessoas');
  }

  // Cadastrar pessoas
  cadastrar(p:Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>('http://localhost:3000/pessoas', p);
  }

  // Editar pessoas
  editar(p:Pessoa, id:number):Observable<Pessoa>{
    //return this.http.put<Pessoa>('http://localhost:3000/pessoas/'+id, p);
    return this.http.put<Pessoa>(`http://localhost:3000/pessoas/${id}`, p);
  }

  // Remover pessoas
  remover(id:number):Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/pessoas/${id}`);
  }

}
