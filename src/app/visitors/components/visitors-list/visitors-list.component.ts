import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.css']
})
export class VisitorsListComponent implements OnInit, OnDestroy {
  visitors: Visitor[];
  sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe(data => {
      this.visitors = data.visitors;
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
