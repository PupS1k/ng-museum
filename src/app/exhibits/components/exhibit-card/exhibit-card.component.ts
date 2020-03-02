import {Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../../core/models/exhibit.model';

@Component({
  selector: 'app-exhibit-card',
  templateUrl: './exhibit-card.component.html',
  styleUrls: ['./exhibit-card.component.css']
})
export class ExhibitCardComponent implements OnInit {
  @Input() exhibit: Exhibit;

  constructor() { }

  ngOnInit(): void {
  }

}
