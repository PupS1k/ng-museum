import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Tour} from '../../models/tour.model';
import {Exhibit} from '../../../exhibits/models/exhibit.model';

@Component({
  selector: 'app-tour-details-presentation',
  templateUrl: './tour-details-presentation.component.html',
  styleUrls: ['./tour-details-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourDetailsPresentationComponent {
  @Input() tour: Tour;
  @Input() exhibits: Exhibit[] = null;
  @Input() isFavouriteTour: boolean;
  @Input() isGuide: boolean;
  @Input() isTour: boolean;

  @Output() delete = new EventEmitter<Tour['tourId']>();
  @Output() add = new EventEmitter<Tour['tourId']>();

  onDeleteFavouriteTour() {
    this.delete.emit(this.tour.tourId);
  }

  onAddIntoFavourites() {
    this.add.emit(this.tour.tourId);
  }
}
