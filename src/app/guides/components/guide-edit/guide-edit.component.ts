import {Component, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {ClearSelectedGuide, CreateGuideStart, UpdateGuideStart} from '../../store/guide.actions';
import {selectFormGuide, selectIsUpdateGuide} from '../../store/guide.selectors';
import {GuideForm} from '../../models/guide-form.model';

@Component({
  selector: 'app-guide-edit',
  template: `
    <app-guide-edit-presentation
      [guideForm]="guideForm$ | async"
      [isUpdate]="isUpdate$ | async"
      (create)="onCreate($event)"
      (update)="onUpdate($event)"
    ></app-guide-edit-presentation>

  `
})
export class GuideEditComponent implements OnDestroy {
  isUpdate$ = this.store.select(selectIsUpdateGuide);
  guideForm$ = this.store.select(selectFormGuide);

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
  }


  onCreate(guideFormData: GuideForm) {
    this.store.dispatch(new CreateGuideStart(guideFormData));
    this.router.navigate(['/guides']);
  }

  onUpdate(guideFormData: GuideForm) {
    this.store.dispatch(new UpdateGuideStart(guideFormData));
    this.router.navigate(['/guides']);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedGuide());
  }
}
