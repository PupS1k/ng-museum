import {Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../exhibit.model';

@Component({
  selector: 'app-exhibit-item',
  templateUrl: './exhibit-item.component.html',
  styleUrls: ['./exhibit-item.component.css']
})
export class ExhibitItemComponent implements OnInit {
  @Input() exhibit: Exhibit;

  constructor() { }

  ngOnInit(): void {
  }

}
