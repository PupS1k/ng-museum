import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-card-presentation',
  templateUrl: './exhibit-card-presentation.component.html',
  styleUrls: ['./exhibit-card-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitCardPresentationComponent {
  @Input() exhibit: Exhibit;
  @Input() isGuide: boolean;
  @Input() isTour: boolean;

  @Output() deleteExhibit = new EventEmitter<number>();

  deleteExhibitTour() {
    this.deleteExhibit.emit(this.exhibit.exhibitId);
  }
}
