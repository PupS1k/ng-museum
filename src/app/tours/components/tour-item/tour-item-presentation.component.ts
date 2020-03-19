import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
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
  @Input() isProfile: boolean;

  @Output() deleteTourProfile = new EventEmitter<void>();

  deleteTourFromProfile() {
    this.deleteTourProfile.emit();
  }
}
