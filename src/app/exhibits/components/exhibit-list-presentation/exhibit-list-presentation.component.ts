import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-list-presentation',
  templateUrl: './exhibit-list-presentation.component.html',
  styleUrls: ['./exhibit-list-presentation.component.scss']
})
export class ExhibitListPresentationComponent {
  @Input() exhibits: Exhibit[];
  @Input() showMode: string;
  @Input() isGuide: boolean;

  @Output() moveExhibits = new EventEmitter<void>();

  onMoveExhibits() {
    this.moveExhibits.emit();
  }

}
