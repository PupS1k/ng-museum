import {Component, Input} from '@angular/core';
import {Guide} from '../../models/guide.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {DeleteGuideStart} from '../../store/guide.actions';
import {selectIsTour} from '../../../tours/store/tour.selectors';
import {DeleteGuideTourStart} from '../../../tours/store/tour.actions';

@Component({
  selector: 'app-guide-item',
  template: `
    <app-guide-item-presentation
      [guide]="guide"
      [isTour]="isTour$ | async"
      (deleteGuide)="onDeleteGuide()"
      (deleteGuideFromTour)="onDeleteGuideFromTour()"
    ></app-guide-item-presentation>
  `
})
export class GuideItemComponent {
  @Input() guide: Guide;

  isTour$ = this.store.select(selectIsTour);

  constructor(private store: Store<AppState>) { }

  onDeleteGuide() {
    this.store.dispatch(new DeleteGuideStart(this.guide.guideId));
  }

  onDeleteGuideFromTour() {
    this.store.dispatch(new DeleteGuideTourStart(this.guide.guideId));
  }
}
