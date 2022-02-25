import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.css']
})
export class Ex3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numero:number = 0;
  tabuada:string = '';

  calcular(){
    // Limpa qualquer informação que tenha na variável tabuada
    this.tabuada = '';

    // Laço de repetição
    for(let i=0; i<11; i++){
      this.tabuada += (i * this.numero) + " ";
    }
  }

}
