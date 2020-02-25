import {Component, OnInit} from '@angular/core';
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
  isHomePage = true;

  constructor(
    private exhibitsService: ExhibitsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.exhibits$ = this.exhibitsService.getExhibits();
    this.isHomePage = this.router.url === '/';
  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }

}
