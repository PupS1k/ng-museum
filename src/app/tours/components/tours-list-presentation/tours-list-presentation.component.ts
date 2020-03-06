import {Component, Input} from '@angular/core';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tours-list-presentation',
  templateUrl: './tours-list-presentation.component.html',
  styleUrls: ['./tours-list-presentation.component.scss']
})
export class ToursListPresentationComponent {
  @Input() tours: Tour[];
  @Input() isGuide: boolean;
}
