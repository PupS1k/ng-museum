import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../../core/models/tour.model';

@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.css']
})
export class TourDetailsComponent implements OnInit {
  tour: Tour;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      this.tour = data.tour;
    });
  }

}
