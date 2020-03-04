import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitors-list-presentation',
  templateUrl: './visitors-list-presentation.component.html',
  styleUrls: ['./visitors-list-presentation.component.css']
})
export class VisitorsListPresentationComponent {
  @Input() visitors: Visitor[];
  @Output() updateVisitors = new EventEmitter<void>();

  onUpdateVisitors() {
    this.updateVisitors.emit();
  }
}
