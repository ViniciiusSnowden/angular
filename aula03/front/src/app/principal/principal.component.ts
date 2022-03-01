import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private servico:PessoaService) { }

  ngOnInit(): void {
    this.obterPessoas();
  }

  // Vetor de pessoas
  vetor : Pessoa[] = [];

  // Visibilidade dos botões
  btnCadastrar:boolean = true;

  // Obter todas as pessoas e armazenar no vetor
  obterPessoas(){
    this.servico.listar()
    .subscribe(retorno => {this.vetor = retorno});
  }

}
