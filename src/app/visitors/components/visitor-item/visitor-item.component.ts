import {Component, Input} from '@angular/core';
import {Visitor} from '../../models/visitor.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {DeleteVisitorStart} from '../../store/visitor.actions';

@Component({
  selector: 'app-visitor-item',
  templateUrl: './visitor-item.component.html',
  styleUrls: ['./visitor-item.component.scss']
})
export class VisitorItemComponent {
  @Input() visitor: Visitor;

  constructor(private store: Store<AppState>) { }

  onDeleteVisitor() {
    this.store.dispatch(new DeleteVisitorStart(this.visitor));
  }
}
