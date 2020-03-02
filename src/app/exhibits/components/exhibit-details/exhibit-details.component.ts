import {Component, OnInit} from '@angular/core';
import {Exhibit} from '../../../core/models/exhibit.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exhibit-details',
  templateUrl: './exhibit-details.component.html',
  styleUrls: ['./exhibit-details.component.css']
})
export class ExhibitDetailsComponent implements OnInit {
  exhibit: Exhibit;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      this.exhibit = data.exhibit;
    });
  }

}
