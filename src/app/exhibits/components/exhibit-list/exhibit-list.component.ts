import {Component, Input, OnInit} from '@angular/core';
import {Exhibit} from '../../models/exhibit.model';
import {ExhibitsService} from '../../services/exhibits.service';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import set = Reflect.set;

@Component({
  selector: 'app-exhibit-list',
  templateUrl: './exhibit-list.component.html',
  styleUrls: ['./exhibit-list.component.css']
})
export class ExhibitListComponent implements OnInit {

  exhibits$: Observable<Exhibit[]>;
  isLoading = false;
  @Input() showMode: string;

  constructor(
    private exhibitsService: ExhibitsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    console.log(this.isLoading);
    this.exhibitsService.getExhibits().subscribe(exhibits => {
      this.isLoading = false;
      this.exhibits$ = of(exhibits);
    });
  }

  onNavigateExhibits() {
    this.router.navigate(['/exhibits']);
  }

}
