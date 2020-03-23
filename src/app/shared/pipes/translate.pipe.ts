import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  transform(key: string, ...args: any[]): string {
    console.log(key, args)
    return key;
  }

}
