import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Guide} from '../../models/guide.model';

@Component({
  selector: 'app-guides-list-presentation',
  templateUrl: './guides-list-presentation.component.html',
  styleUrls: ['./guides-list-presentation.component.scss']
})
export class GuidesListPresentationComponent {
  @Input() guides: Guide[];
  @Output() updateGuides = new EventEmitter<void>();

  onUpdateGuides() {
    this.updateGuides.emit();
  }
}
