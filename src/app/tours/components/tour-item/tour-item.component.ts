import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tour-item',
  templateUrl: './tour-item.component.html',
  styleUrls: ['./tour-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourItemComponent {
  @Input() tour: Tour;
  @Input() isGuide: boolean;
}
