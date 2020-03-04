import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {Exhibit} from '../../models/exhibit.model';
import {takeUntil} from 'rxjs/operators';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
})
export class ExhibitListComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  exhibits: Exhibit[];
  isGuide$: Observable<boolean>;
  isLoading = false;

  @Input() showMode: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    this.route.data.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
      this.exhibits = data.exhibits;
      this.isLoading = false;
    });

    this.isGuide$ = this.authService.isGuide$;
  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
