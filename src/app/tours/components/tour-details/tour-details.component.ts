import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../models/tour.model';
import {Observable, Subscription} from 'rxjs';
import {Exhibit} from '../../../exhibits/models/exhibit.model';
import {ToursService} from '../../service/tours.service';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  tour: Tour;
  sub: Subscription;
  exhibits$: Observable<Exhibit[]>;
  isFavouriteTour$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private toursService: ToursService) {
  }

  ngOnInit(): void {
    this.sub = this.route.parent.data.subscribe(data => {
      this.tour = data.tour;
    });

    this.exhibits$ = this.toursService.fetchTourExhibits(this.tour.tourId);
    this.isFavouriteTour$ = this.toursService.checkFavouriteTour(this.tour.tourId, 3);
  }

  onDeleteTourFromFavourites() {
    this.toursService.deleteFavouriteTour(this.tour.tourId, 3).subscribe(() => {
      this.isFavouriteTour$ = this.toursService.checkFavouriteTour(this.tour.tourId, 3);
    });
  }

  onAddTourIntoFavourites() {
    this.toursService.addFavouriteTour(this.tour.tourId, 3).subscribe(() => {
      this.isFavouriteTour$ = this.toursService.checkFavouriteTour(this.tour.tourId, 3);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
