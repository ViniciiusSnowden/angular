import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css']
})
export class C5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Formulário
  formulario = new FormGroup({
    nome : new FormControl(),
    idade : new FormControl()
  });

  // Vetor
  dados : Pessoa[] = [];

  // Cadastro
  cadastro():void{
    this.dados.push(this.formulario.value);
    this.formulario.reset();
  }

  // Excluir
  excluir(indice:number):void{
    this.dados.splice(indice, 1);
  }


}
