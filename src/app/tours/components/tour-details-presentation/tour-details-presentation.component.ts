import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tour} from '../../models/tour.model';
import {Exhibit} from '../../../exhibits/models/exhibit.model';

@Component({
  selector: 'app-tour-details-presentation',
  templateUrl: './tour-details-presentation.component.html',
  styleUrls: ['./tour-details-presentation.component.scss']
})
export class TourDetailsPresentationComponent {
  @Input() tour: Tour;
  @Input() exhibits: Exhibit[] = null;
  @Input() isFavouriteTour: boolean;
  @Input() isGuide: boolean;

  @Output() delete = new EventEmitter<void>();
  @Output() add = new EventEmitter<void>();

  onDeleteFavouriteTour() {
    this.delete.emit();
  }

  onAddIntoFavourites() {
    this.add.emit();
  }
}
