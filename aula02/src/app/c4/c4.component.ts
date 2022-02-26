import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Criando um objeto de formulário
  formulario = new FormGroup({
    nome  : new FormControl(),
    idade : new FormControl()
  });

}
