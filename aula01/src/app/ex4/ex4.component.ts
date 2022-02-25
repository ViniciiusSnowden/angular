import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex4',
  templateUrl: './ex4.component.html',
  styleUrls: ['./ex4.component.css']
})
export class Ex4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numero1:number = 0;
  numero2:number = 0;
  numero3:number = 0;
  menorNumero:number = 0;

  calcular(){
    
    if(this.numero1 < this.numero2 && this.numero1 < this.numero3){
      this.menorNumero = this.numero1;
    }else if(this.numero2 < this.numero1 && this.numero2 < this.numero3){
      this.menorNumero = this.numero2;
    }else{
      this.menorNumero = this.numero3;
    }

  }

}
