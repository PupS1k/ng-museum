import {Component, Input, OnInit} from '@angular/core';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitor-item',
  templateUrl: './visitor-item.component.html',
  styleUrls: ['./visitor-item.component.css']
})
export class VisitorItemComponent implements OnInit {
  @Input() visitor: Visitor;

  constructor() { }

  ngOnInit(): void {
  }

}
