import {Component, Input} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-card',
  templateUrl: './exhibit-card.component.html',
  styleUrls: ['./exhibit-card.component.scss']
})
export class ExhibitCardComponent {
  @Input() exhibit: Exhibit;
  @Input() isGuide: boolean;
}
