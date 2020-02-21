import {Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';

@Component({
  selector: 'app-exhibit-list-presentation',
  templateUrl: './exhibit-list-presentation.component.html',
  styleUrls: ['./exhibit-list-presentation.component.css']
})
export class ExhibitListPresentationComponent implements OnInit {

  constructor() { }

  @Input()
  exhibits: Exhibit[];

  ngOnInit(): void {

  }

}