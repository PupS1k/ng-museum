import {Component, Input} from '@angular/core';
import {Guide} from '../../models/guide.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {DeleteGuideStart} from '../../store/guide.actions';

@Component({
  selector: 'app-guide-item',
  templateUrl: './guide-item.component.html',
  styleUrls: ['./guide-item.component.scss']
})
export class GuideItemComponent {
  @Input() guide: Guide;

  constructor(private store: Store<AppState>) { }

  onDeleteGuide() {
    this.store.dispatch(new DeleteGuideStart(this.guide.guideId));
  }
}
