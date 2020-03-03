import {Component, Input} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-item',
  templateUrl: './exhibit-item.component.html',
  styleUrls: ['./exhibit-item.component.css']
})
export class ExhibitItemComponent {
  @Input() exhibit: Exhibit;
}
