import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

import {GuidesService} from '../../services/guides.service';
import {Guide} from '../../models/guide.model';

@Component({
  selector: 'app-guides-list',
  templateUrl: './guides-list.component.html',
  styleUrls: ['./guides-list.component.scss']
})
export class GuidesListComponent implements OnInit {
  guides$: Observable<Guide[]>;
  isUpdate = false;

  constructor(private route: ActivatedRoute, private guidesService: GuidesService) {}

  ngOnInit(): void {
    if (!this.isUpdate) {
      this.guides$ = this.route.data.pipe(map(data => data.guides));
    }
  }

  onUpdateGuides() {
    this.isUpdate = true;
    this.guides$ = this.guidesService.fetchGuides();
  }

}
