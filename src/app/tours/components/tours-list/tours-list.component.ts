import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tours-list',
  templateUrl: './tours-list.component.html',
  styleUrls: ['./tours-list.component.css']
})
export class ToursListComponent implements OnInit {
  sub: Subscription;
  tours: Tour[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.data.subscribe(data => {
      this.tours = data.tours;
      // this.isLoading = false;
    });
  }

}
