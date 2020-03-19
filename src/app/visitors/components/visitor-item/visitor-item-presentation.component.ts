import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitor-item-presentation',
  templateUrl: './visitor-item-presentation.component.html',
  styleUrls: ['./visitor-item-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorItemPresentationComponent {
  @Input() visitor: Visitor;
  @Input() isTour: boolean;

  @Output() deleteVisitor = new EventEmitter<void>();
  @Output() deleteVisitorFromTour = new EventEmitter<void>();

  onDeleteVisitor() {
    this.deleteVisitor.emit();
  }

  onDeleteVisitorFromTour() {
    this.deleteVisitorFromTour.emit();
  }

}
