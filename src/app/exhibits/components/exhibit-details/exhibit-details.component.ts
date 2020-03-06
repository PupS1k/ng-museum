import {Component, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';
import {AppState} from '../../../app.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.scss']
})
export class ExhibitDetailsComponent implements OnInit {
  exhibit$: Observable<Exhibit>;
  isGuide$: Observable<boolean>;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.exhibit$ = this.store.select('exhibits').pipe(map(exhibitState => {
      this.isLoading = exhibitState.loading;
      return exhibitState.selectedExhibit;
    }));

    this.isGuide$ = this.authService.isGuide$;
  }
}
