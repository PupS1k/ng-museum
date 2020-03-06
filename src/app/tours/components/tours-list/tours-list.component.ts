import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../models/tour.model';
import {AuthService} from '../../../core/services/auth.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.scss']
})
export class ToursListComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  tours: Tour[];
  isGuide$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.tours = data.tours;
        // this.isLoading = false;
      });

    this.isGuide$ = this.authService.isGuide$;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
