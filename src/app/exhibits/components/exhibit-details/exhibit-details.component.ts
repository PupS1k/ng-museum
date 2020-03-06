import {Component, OnDestroy, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ActivatedRoute} from '@angular/router';
import {map, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.scss']
})
export class ExhibitDetailsComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  exhibit$: Observable<Exhibit>;
  isGuide$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.exhibit$ = this.route.parent.data.pipe(
      takeUntil(this.destroy$),
      map(data => data.exhibit)
    );
    this.isGuide$ = this.authService.isGuide$;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
