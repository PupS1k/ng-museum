import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {Exhibit} from '../../../core/models/exhibit.model';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
})
export class ExhibitListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  exhibits: Exhibit[];
  isLoading = false;

  @Input() showMode: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.sub = this.route.data.subscribe(data => {
      this.exhibits = data.exhibits;
      this.isLoading = false;
    });
  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
