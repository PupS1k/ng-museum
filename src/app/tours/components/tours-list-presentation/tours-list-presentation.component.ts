import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tours-list-presentation',
  templateUrl: './tours-list-presentation.component.html',
  styleUrls: ['./tours-list-presentation.component.css']
})
export class ToursListPresentationComponent implements OnInit {
  @Input() tours: Tour[];

  constructor() { }

  ngOnInit(): void {
  }

}
