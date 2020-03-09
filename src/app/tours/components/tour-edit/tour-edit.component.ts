import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../models/tour.model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.scss']
})
export class TourEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  tour: Tour;
  error: string;
  isLoading = false;

  tourForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.parent.data.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
      this.tour = data.tour;
      this.tourForm = new FormGroup({
        theme: new FormControl(this.tour.theme, [Validators.required, Validators.minLength(2)]),
        typeOfExhibits: new FormControl(this.tour.typeOfExhibits, [Validators.required]),
        duration: new FormControl(this.tour.duration, [Validators.required]),
        cost: new FormControl(this.tour.cost, [Validators.required]),
        imageUrl: new FormControl(this.tour.imageUrl, [Validators.required]),
      });
    });
  }

  onSubmit() {
    const theme = this.tourForm.value.theme;
    const typeOfExhibits = this.tourForm.value.typeOfExhibits;
    const duration = this.tourForm.value.duration;
    const cost = this.tourForm.value.cost;
    const imageUrl = this.tourForm.value.imageUrl;

    this.isLoading = true;


    console.log(theme, typeOfExhibits, duration, cost, imageUrl);

    // this.authService.login(name, password)
    //   .subscribe(() => {
    //       this.router.navigate(['/']);
    //       this.isLoading = false;
    //     },
    //     errorMessage => {
    //       this.isLoading = false;
    //       this.error = errorMessage;
    //     });
  }

  onCloseAlert() {
    this.error = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
