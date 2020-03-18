import { Pipe, PipeTransform } from '@angular/core';
import {Exhibit} from '../models/exhibit.model';

@Pipe({name: 'displayExhibitCards'})
export class DisplayExhibitCardsPipe implements PipeTransform {
  transform(exhibits: Exhibit[], isTour?: boolean): Exhibit[] {
    return isTour ? exhibits : exhibits.slice(0, 6);
  }
}
