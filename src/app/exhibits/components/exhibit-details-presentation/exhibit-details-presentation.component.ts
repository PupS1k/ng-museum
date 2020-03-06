import {Component, Input} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';


@Component({
  selector: 'app-exhibit-details-presentation',
  templateUrl: './exhibit-details-presentation.component.html',
  styleUrls: ['./exhibit-details-presentation.component.scss']
})
export class ExhibitDetailsPresentationComponent {
  @Input() exhibit: Exhibit;
  @Input() isGuide: boolean;
}
