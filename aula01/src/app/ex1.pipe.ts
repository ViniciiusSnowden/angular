import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ex1'
})
export class Ex1Pipe implements PipeTransform {

  transform(nota:number): string {
    
    let situacao = '';

    if(nota >= 7){
      situacao = 'Aprovado(a)';
    }else if(nota >= 5){
      situacao = 'Exame';
    }else{
      situacao = 'Reprovado(a)';
    }

    return situacao;

  }

}
