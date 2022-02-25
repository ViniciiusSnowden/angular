import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'consoantes'
})
export class ConsoantesPipe implements PipeTransform {

  transform(palavra:string): number {

    let quantidade = 0;

    for(let i=0; i<palavra.length; i++){

      let letra = palavra.charAt(i).toLowerCase();

      if(letra != 'a' && letra != 'e' && letra != 'i' && letra != 'o' && letra != 'u'){
        quantidade++;
      }

    }

    return quantidade;

  }

}
