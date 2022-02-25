import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nota1:number = 0;
  nota2:number = 0;
  media:number = 0;
  situacao:string = '';

  calcular(){
    this.media = (this.nota1+this.nota2)/2;
    this.situacao = this.media >= 7 ? 'Aprovado(a)' : 'Reprovado(a)';
  }

}
