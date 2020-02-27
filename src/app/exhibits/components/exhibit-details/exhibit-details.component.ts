import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ActivatedRoute} from '@angular/router';
import {ExhibitsService} from '../../services/exhibits.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.css']
})
export class ExhibitDetailsComponent implements OnInit {
  exhibit: Exhibit;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.exhibit = data.exhibit;
    });
  }

  ngOnInit(): void {
  }

}
