import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor(value % 3600 / 60);
    const secondes =Math.floor(value % 3600 % 60);

    return `${hours <= 9 ? `0${hours}`: hours}:${minutes<=9 ? `0${minutes}` : minutes}: ${secondes<=9 ? `0${secondes}`: secondes}`;

  }

}
