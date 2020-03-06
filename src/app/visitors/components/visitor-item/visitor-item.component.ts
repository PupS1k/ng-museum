import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Visitor} from '../../models/visitor.model';
import {VisitorsService} from '../../services/visitors.service';

@Component({
  selector: 'app-visitor-item',
  templateUrl: './visitor-item.component.html',
  styleUrls: ['./visitor-item.component.scss']
})
export class VisitorItemComponent {
  @Input() visitor: Visitor;
  @Output() updateVisitors = new EventEmitter<void>();

  constructor(private visitorsService: VisitorsService) { }

  onDeleteVisitor() {
    this.visitorsService.deleteVisitor(this.visitor).subscribe(() => this.updateVisitors.emit());
  }
}
