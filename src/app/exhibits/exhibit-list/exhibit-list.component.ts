import { Component, OnInit } from '@angular/core';
import {Exhibit} from '../exhibit.model';
import {ExhibitsService} from '../exhibits.service';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
})
export class ExhibitListComponent implements OnInit {
  exhibits: Exhibit[];

  constructor(private exhibitsService: ExhibitsService) { }

  ngOnInit(): void {
    this.exhibits = this.exhibitsService.exhibits;
  }

}
