import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente4',
  templateUrl: './componente4.component.html',
  styleUrls: ['./componente4.component.css']
})
export class Componente4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;

  soma(){
    this.resultado = this.numero1 + this.numero2;
  }


}
