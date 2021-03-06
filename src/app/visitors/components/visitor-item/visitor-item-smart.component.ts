import {Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';

import {Visitor} from '../../models/visitor.model';
import {AppState} from '../../../app.reducer';
import {DeleteVisitorStart} from '../../store/visitor.actions';
import {selectIsTour} from '../../../tours/store/tour.selectors';
import {DeleteVisitorTourStart} from '../../../tours/store/tour.actions';

@Component({
  selector: 'app-visitor-item',
  template: `
    <app-visitor-item-presentation
      [visitor]="visitor"
      [isTour]="isTour$ | async"
      (deleteVisitor)="onDeleteVisitor()"
      (deleteVisitorFromTour)="onDeleteVisitorFromTour()"
    ></app-visitor-item-presentation>
  `
})
export class VisitorItemSmartComponent {
  @Input() visitor: Visitor;

  isTour$ = this.store.select(selectIsTour);

  constructor(private store: Store<AppState>) { }

  onDeleteVisitor() {
    this.store.dispatch(new DeleteVisitorStart(this.visitor));
  }

  onDeleteVisitorFromTour() {
    this.store.dispatch(new DeleteVisitorTourStart(this.visitor.visitorId));
  }
}
