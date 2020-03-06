import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../models/tour.model';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Exhibit} from '../../../exhibits/models/exhibit.model';
import {ToursService} from '../../service/tours.service';
import {AuthService} from '../../../core/services/auth.service';
import {UserService} from '../../../core/services/user.service';
import {UserData} from '../../../auth/models/user-data.model';
import {Visitor} from '../../../visitors/models/visitor.model';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit, OnDestroy {
  private obsDestroyed = new Subject();
  visitorId: number;
  tour: Tour;
  exhibits$: Observable<Exhibit[]>;
  isGuide$: Observable<boolean>;
  isFavouriteTour: boolean;

  constructor(
    private route: ActivatedRoute,
    private toursService: ToursService,
    private authService: AuthService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.route.parent.data
      .pipe(takeUntil(this.obsDestroyed))
      .subscribe(data => {
      this.tour = data.tour;
    });

    const userData: UserData = JSON.parse(localStorage.getItem('userData'));

    if (userData.name !== 'admin') {
      this.userService.getVisitorByUsername(userData.name)
        .subscribe((visitor: Visitor) => this.visitorId = visitor.visitorId);
    }

    this.isGuide$ = this.authService.isGuide$;

    if (this.visitorId) {
      this.exhibits$ = this.toursService.fetchTourExhibits(this.tour.tourId);
      this.toursService.checkFavouriteTour(this.tour.tourId, this.visitorId)
        .subscribe((resData: boolean) => this.isFavouriteTour = resData, error => console.log(error));
    }
  }

  onDeleteTourFromFavourites() {
    this.toursService.deleteFavouriteTour(this.tour.tourId, this.visitorId)
      .subscribe(() => this.isFavouriteTour = false, error => console.log(error));
  }

  onAddTourIntoFavourites() {
    this.toursService.addFavouriteTour(this.tour.tourId, this.visitorId)
      .subscribe(() => this.isFavouriteTour = true, error => console.log(error));
  }

  ngOnDestroy(): void {
    this.obsDestroyed.next();
    this.obsDestroyed.complete();
  }
}
