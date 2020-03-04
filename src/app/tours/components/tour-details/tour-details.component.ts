import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../models/tour.model';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Exhibit} from '../../../exhibits/models/exhibit.model';
import {ToursService} from '../../service/tours.service';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  private obsDestroyed = new Subject();
  tour: Tour;
  exhibits$: Observable<Exhibit[]>;
  isGuide$: Observable<boolean>;
  isFavouriteTour: boolean;

  constructor(
    private route: ActivatedRoute,
    private toursService: ToursService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.route.parent.data
      .pipe(takeUntil(this.obsDestroyed))
      .subscribe(data => {
      this.tour = data.tour;
    });

    this.exhibits$ = this.toursService.fetchTourExhibits(this.tour.tourId);
    this.isGuide$ = this.authService.isGuide$;
    this.toursService.checkFavouriteTour(this.tour.tourId, 3)// <--   visitorId
      .subscribe((resData: boolean) => this.isFavouriteTour = resData, error => console.log(error));
  }

  onDeleteTourFromFavourites() {
    this.toursService.deleteFavouriteTour(this.tour.tourId, 3) // <--   visitorId
      .subscribe(() => this.isFavouriteTour = false, error => console.log(error));
  }

  onAddTourIntoFavourites() {
    this.toursService.addFavouriteTour(this.tour.tourId, 3)// <--   visitorId
      .subscribe(() => this.isFavouriteTour = true, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.obsDestroyed.next();
    this.obsDestroyed.complete();
  }
}
