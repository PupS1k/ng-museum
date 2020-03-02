import {Component, Input, OnInit} from '@angular/core';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitors-list-presentation',
  templateUrl: './visitors-list-presentation.component.html',
  styleUrls: ['./visitors-list-presentation.component.css']
})
export class VisitorsListPresentationComponent implements OnInit {
  @Input() visitors: Visitor[];

  constructor() { }

  ngOnInit(): void {
  }

}
