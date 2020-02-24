import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {ExhibitsService} from './exhibits/services/exhibits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private exhibitsService: ExhibitsService) {}


  ngOnInit(): void {
    this.authService.autoLogin();
    // this.exhibitsService.fetchExhibits().subscribe();
  }
}
