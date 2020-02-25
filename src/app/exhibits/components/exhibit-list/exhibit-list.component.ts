import {Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ExhibitsService} from '../../services/exhibits.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
})
export class ExhibitListComponent implements OnInit {

  exhibits$: Observable<Exhibit[]>;
  @Input() showMode: string;

  constructor(
    private exhibitsService: ExhibitsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.exhibits$ = this.exhibitsService.getExhibits();
  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }

}
