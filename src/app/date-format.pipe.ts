import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string, format: string = 'dd-MM-yyyy'): string {
    const date = new Date(value);
    const day = date.getDate();
    const monthNames = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    if (format === 'dd-MM-yyyy') {
      return `${day.toString().padStart(2, '0')}-${month}-${year}`;
    } else if (format === 'dd MMM yyyy') {
      return `${day.toString().padStart(2, '0')} ${month} ${year}`;
    }

    return value;
  }
}
