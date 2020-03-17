import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tours-list-presentation',
  templateUrl: './tours-list-presentation.component.html',
  styleUrls: ['./tours-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToursListPresentationComponent {
  @Input() tours: Tour[];
  @Input() isGuide: boolean;
  @Input() isEdit: boolean;

  @Output() deleteExhibit = new EventEmitter<number>();

  deleteExhibitFromTour(tourId: number) {
    this.deleteExhibit.emit(tourId);
  }
}
