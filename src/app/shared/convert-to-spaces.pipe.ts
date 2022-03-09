import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpacesPipe',
})
export class ConvertTospacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}
