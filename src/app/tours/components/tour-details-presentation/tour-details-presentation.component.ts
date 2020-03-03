import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../models/tour.model';
import {Exhibit} from '../../../exhibits/models/exhibit.model';

@Component({
  selector: 'app-tour-details-presentation',
  templateUrl: './tour-details-presentation.component.html',
  styleUrls: ['./tour-details-presentation.component.css']
})
export class TourDetailsPresentationComponent implements OnInit {
  @Input() tour: Tour;
  @Input() exhibits: Exhibit[];
  exhibitsIsExist = true;

  ngOnInit(): void {
    if (this.exhibits) {
      this.exhibitsIsExist = !this.exhibits.length;
    }
  }
}
