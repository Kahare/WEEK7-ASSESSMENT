import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, charLimit: number = 0, placeholderText: string = 'Input is too short'): string {
    if (!value || value.length < charLimit) {
      return placeholderText;
    }
    return value;
  }
}
