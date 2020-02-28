import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Exhibit} from '../../../exhibits/models/exhibit.model';
import {ExhibitsService} from '../../services/exhibits.service';
import {Observable, of, Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import set = Reflect.set;

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
})
export class ExhibitListComponent implements OnInit, OnDestroy {
  sub: Subscription;
  exhibits: Exhibit[];
  isLoading = false;
  @Input() showMode: string;

  constructor(
    private exhibitsService: ExhibitsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sub = this.route.data.subscribe(data => {
      this.exhibits = data.exhibits;
    });
  }

  ngOnInit(): void {

  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
