import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Tour} from '../../models/tour.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {selectSelectedTour} from '../../store/tour.selectors';
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
  tour: Tour;
  tourId: number;
  error: string;
  isLoading = false;

  tourForm: FormGroup;

  constructor(private store: Store<AppState>,) {}

  ngOnInit(): void {
    this.store.select(selectSelectedTour).pipe(takeUntil(this.destroy$))
      .subscribe(tour => {
        if (tour) {
          this.tourId = tour.tourId;

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

    // this.isLoading = true;

    this.store.dispatch(new UpdateTourStart({
      tourId: this.tourId,
      typeOfExhibits,
      theme,
      cost,
      imageUrl,
      duration
    }));
  }

  onCloseAlert() {
    this.error = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
