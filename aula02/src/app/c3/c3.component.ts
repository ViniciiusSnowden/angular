import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Executa ao clicar no botão
  acao(obj:NgForm){
    alert(JSON.stringify(obj.value));
  }

}
