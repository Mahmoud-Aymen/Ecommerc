import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'termtext'
})
export class TermtextPipe implements PipeTransform {

  transform(mohamed:string , limit:number , ali:boolean): string {
    return mohamed.split(" ").slice(0,limit).join(" ");
  }

}
