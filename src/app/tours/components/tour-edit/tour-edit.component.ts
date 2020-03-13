import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {selectExhibitsOfTour, selectGuideOfTour, selectIsTour, selectTour, selectVisitorsOfTour} from '../../store/tour.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {UpdateTourStart} from '../../store/tour.actions';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.scss']
})
export class TourEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  isTour$ = this.store.select(selectIsTour);
  exhibits$ = this.store.select(selectExhibitsOfTour);
  visitors$ = this.store.select(selectVisitorsOfTour);
  guide$ = this.store.select(selectGuideOfTour);
  tourForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectTour).pipe(takeUntil(this.destroy$))
      .subscribe(tour => {
        if (tour) {
          this.tourForm = new FormGroup({
            duration: new FormControl(tour.duration, [Validators.required]),
            cost: new FormControl(tour.cost, [Validators.required]),
            imageUrl: new FormControl(tour.imageUrl, [Validators.required]),
            typeOfExhibits: new FormControl(tour.typeOfExhibits, [Validators.required]),
            theme: new FormControl(tour.theme, [Validators.required]),
          });
        }
      });
  }

  onSubmit() {
    const theme = this.tourForm.value.theme;
    const typeOfExhibits = this.tourForm.value.typeOfExhibits;
    const duration = this.tourForm.value.duration;
    const cost = this.tourForm.value.cost;
    const imageUrl = this.tourForm.value.imageUrl;

    this.store.dispatch(new UpdateTourStart({
      typeOfExhibits,
      theme,
      cost,
      imageUrl,
      duration
    }));
  }

  deleteExhibitFromTour() {
    console.log('delete exhibit');
    // this.store.dispatch(new DeleteExhibitFromTour());
  }


  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
