import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Objeto da classe Pessoa
  p = new Pessoa();

}
