import {Component} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../../../app.reducer';
import {Store} from '@ngrx/store';
import {selectIsGuide} from '../../../auth/store/auth.selectors';
import {selectExhibit} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.scss']
})
export class ExhibitDetailsComponent {
  exhibit$ = this.store.select(selectExhibit);
  isGuide$ = this.store.select(selectIsGuide);

  constructor(private store: Store<AppState>) {}
}
