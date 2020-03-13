import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourCardComponent {
  @Input() tour: Tour;

  @Output() deleteExhibit = new EventEmitter();

  deleteFromTour() {
    this.deleteExhibit.emit();
  }
}
