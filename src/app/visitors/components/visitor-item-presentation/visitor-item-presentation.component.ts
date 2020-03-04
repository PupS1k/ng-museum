import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitor-item-presentation',
  templateUrl: './visitor-item-presentation.component.html',
  styleUrls: ['./visitor-item-presentation.component.css']
})
export class VisitorItemPresentationComponent {
  @Input() visitor: Visitor;

  @Output() deleteVisitor = new EventEmitter<void>();

  onDeleteVisitor() {
    this.deleteVisitor.emit();
  }

}
