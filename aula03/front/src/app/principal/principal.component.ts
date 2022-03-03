import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  // Obter o índice da pessoa selecionada
  indiceSelecionado:number = 0;

  // Obter todas as pessoas e armazenar no vetor
  obterPessoas(){
    this.servico.listar()
    .subscribe(retorno => {this.vetor = retorno});
  }

  // Formulário
  formulario = new FormGroup({
    nome : new FormControl(),
    idade : new FormControl()
  });

  // Cadastrar
  cadastrar(){
    this.servico.cadastrar(this.formulario.value)
    .subscribe(obj => { 
      this.vetor.push(obj);
      this.formulario.reset();
    });
  }

  // Selecionar
  selecionar(indice:number){
    
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade: this.vetor[indice].idade
    });

    this.btnCadastrar = false;

    this.indiceSelecionado = this.vetor[indice].id || 0;

  }

  // Cancelar (reset)
  cancelar(){
    this.formulario.reset();
    this.indiceSelecionado = 0;
    this.btnCadastrar = true;
  }

  // Alterar
  alterar(){
    this.servico.editar(this.formulario.value, this.indiceSelecionado)
    .subscribe(obj => {

      let indiceVetor = this.retornarIndiceVetor(obj.id || 0);
      this.vetor[indiceVetor] = obj;
      this.cancelar();
      
    })
  }

  // Retornar o índice do vetor utilizando o id
  retornarIndiceVetor(id:number):number{

    let indice = this.vetor.findIndex(obj => {
      return obj.id === id;
    });

    return indice;
    
  }

  // Remover
  remover(){
    this.servico.remover(this.indiceSelecionado)
    .subscribe(retorno => {

      let indiceVetor = this.retornarIndiceVetor(this.indiceSelecionado);
      this.vetor.splice(indiceVetor, 1);
      this.cancelar();

    })
  }

}
