import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Tour} from '../../../tours/models/tour.model';

@Component({
  selector: 'app-exhibit-edit-presentation',
  templateUrl: './exhibit-edit-presentation.component.html',
  styleUrls: ['./exhibit-edit-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitEditPresentationComponent {
  @Input() tours: Tour[];
  @Input() isEdit: boolean;

  @Output() deleteExhibit = new EventEmitter<number>();

  deleteExhibitFromTour(tourId) {
    this.deleteExhibit.emit(tourId);
  }
}
