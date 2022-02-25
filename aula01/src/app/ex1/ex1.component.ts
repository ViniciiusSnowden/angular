import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Vetor de notas
  notas:number[] = [7, 4, 9, 2, 10, 3, 8]; 

}
