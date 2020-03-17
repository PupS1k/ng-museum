import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tour-item-presentation',
  templateUrl: './tour-item-presentation.component.html',
  styleUrls: ['./tour-item-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourItemPresentationComponent {
  @Input() tour: Tour;
  @Input() isGuide: boolean;
}
