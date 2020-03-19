import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectIsUpdateVisitor, selectVisitorForm} from '../../store/visitor.selectors';
import {ClearSelectedVisitor, CreateVisitorStart, UpdateVisitorStart} from '../../store/visitor.actions';
import {VisitorForm} from '../../models/visitor-form.model';

@Component({
  selector: 'app-visitor-edit',
  template: `
    <app-visitor-edit-presentation
      [userForm]="visitorForm$ | async"
      [isUpdate]="isUpdate$ | async"
      (create)="onCreate($event)"
      (update)="onUpdate($event)"
    ></app-visitor-edit-presentation>

  `
})
export class VisitorEditSmartComponent implements OnDestroy {
  isUpdate$ = this.store.select(selectIsUpdateVisitor);
  visitorForm$ = this.store.select(selectVisitorForm);

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {}

  onUpdate(visitorFormData: VisitorForm) {
    this.store.dispatch(new UpdateVisitorStart(visitorFormData));
    this.router.navigate(['/visitors']);
  }

  onCreate(visitorFormData: VisitorForm) {
    this.store.dispatch(new CreateVisitorStart(visitorFormData));
    this.router.navigate(['/visitors']);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedVisitor());
  }
}
