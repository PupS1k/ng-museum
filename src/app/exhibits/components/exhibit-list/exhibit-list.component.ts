import { Component, OnInit } from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ExhibitsService} from '../../services/exhibits.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
})
export class ExhibitListComponent implements OnInit {
  exhibits$: Observable<Exhibit[]>;

  constructor(private exhibitsService: ExhibitsService) { }

  ngOnInit(): void {
    this.exhibits$ = this.exhibitsService.getExhibits();
  }

}
