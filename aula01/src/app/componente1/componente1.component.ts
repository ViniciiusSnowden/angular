import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Variáveis
  exibir:boolean = true;
  nomes:string[] = ['Ana', 'Caio', 'Jean', 'Patrícia'];
  exibirFundo:boolean = true;

}
