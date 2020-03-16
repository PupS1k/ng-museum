import {Component, Input} from '@angular/core';
import {Visitor} from '../../models/visitor.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {DeleteVisitorStart} from '../../store/visitor.actions';
import {selectIsTour} from '../../../tours/store/tour.selectors';

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
export class VisitorItemComponent {
  @Input() visitor: Visitor;

  isTour$ = this.store.select(selectIsTour);

  constructor(private store: Store<AppState>) { }

  onDeleteVisitor() {
    this.store.dispatch(new DeleteVisitorStart(this.visitor));
  }

  onDeleteVisitorFromTour() {
    console.log('DeleteVisitorFromTour');
    // this.store.dispatch(new DeleteVisitorFromTour(this.visitor));
  }
}
