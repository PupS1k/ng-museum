import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {selectIsGuide} from '../../../auth/store/auth.selectors';
import {selectExhibits} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.scss']
})
export class ExhibitListComponent {
  exhibits$ = this.store.select(selectExhibits);
  isGuide$ = this.store.select(selectIsGuide);

  @Input() showMode: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }
}
