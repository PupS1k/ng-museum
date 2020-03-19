import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tour-card-presentation',
  templateUrl: './tour-card-presentation.component.html',
  styleUrls: ['./tour-card-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourCardPresentationComponent {
  @Input() tour: Tour;

  @Output() deleteExhibitFormTour = new EventEmitter<number>();

  deleteFromTour() {
    this.deleteExhibitFormTour.emit(this.tour.tourId);
  }
}
