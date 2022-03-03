import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Formulário
  formulario = new FormGroup({
    usuario : new FormControl(),
    senha : new FormControl()
  });

  // Efetuar o login
  login(){
    alert('Oi!');
  }


}
