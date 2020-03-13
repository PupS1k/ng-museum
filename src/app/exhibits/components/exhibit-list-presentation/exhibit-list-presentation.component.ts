import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-list-presentation',
  templateUrl: './exhibit-list-presentation.component.html',
  styleUrls: ['./exhibit-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitListPresentationComponent {
  @Input() exhibits: Exhibit[];
  @Input() showMode: string;
  @Input() isGuide: boolean;
  @Input() isTour: boolean;

  @Output() deleteExhibit = new EventEmitter();
  @Output() moveExhibits = new EventEmitter<void>();

  onMoveExhibits() {
    this.moveExhibits.emit();
  }

  deleteFromTour() {
    this.deleteExhibit.emit();
  }
}
