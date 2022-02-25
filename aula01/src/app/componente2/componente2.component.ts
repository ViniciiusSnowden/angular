import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nomes:string[] = ['Letícia', 'Gilson', 'Gabriela', 'Jonas'];

  valores:number[] = [5, 7, 8, 10];
}
