import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Visitor} from '../../models/visitor.model';
import {map} from 'rxjs/operators';
import {VisitorsService} from '../../services/visitors.service';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.css']
})
export class VisitorsListComponent implements OnInit {
  visitors$: Observable<Visitor[]>;
  isUpdate = false;

  constructor(private route: ActivatedRoute, private visitorsService: VisitorsService) {}

  ngOnInit(): void {
    if (!this.isUpdate) {
      this.visitors$ = this.route.data.pipe(map(data => data.visitors));
    }
  }

  onUpdateVisitors() {
    this.isUpdate = true;
    this.visitors$ = this.visitorsService.fetchVisitors();
  }
}
