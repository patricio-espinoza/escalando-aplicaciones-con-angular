import { Pipe, PipeTransform } from '@angular/core';
import { group } from '@angular/animations';

@Pipe({
  name: 'filterActives'
})
export class FilterActivesPipe implements PipeTransform {

  transform(groups: Group[]): Group[] {
    return groups
      .filter(group => group.active)
      .sort((groupA, groupB) => {
        if (groupA.id === groupB.id) {
          return 0;
        }
        if (groupA.id > groupB.id) {
          return 1;
        }
        if (groupA.id < groupB.id) {
          return -1;
        }
      });
  }

}

interface Group {
  id: string;
  value: string;
  active: boolean;
}
