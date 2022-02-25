import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex5',
  templateUrl: './ex5.component.html',
  styleUrls: ['./ex5.component.css']
})
export class Ex5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  palavras:string[] = ['computador', 'teclado', 'celular', 'tv', 'cadeira'];

}
