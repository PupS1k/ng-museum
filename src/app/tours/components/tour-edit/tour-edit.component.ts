import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Tour} from '../../../core/models/tour.model';

@Component({
  selector: 'app-tour-edit',
  templateUrl: './tour-edit.component.html',
  styleUrls: ['./tour-edit.component.css']
})
export class TourEditComponent implements OnInit {

  tour: Tour;
  error: string;
  isLoading = false;

  tourForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      this.tour = data.tour;
      this.tourForm = new FormGroup({
        theme: new FormControl(this.tour.theme, [Validators.required, Validators.minLength(2)]),
        typeOfExhibits: new FormControl(this.tour.typeOfExhibits, [Validators.required]),
        duration: new FormControl(this.tour.duration, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        cost: new FormControl(this.tour.cost, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        imageUrl: new FormControl(this.tour.imageUrl, [Validators.required]),
      });
    });
  }

  onSubmit() {
    const theme = this.tourForm.value.theme;
    const typeOfExhibits = this.tourForm.value.typeOfExhibits;
    const duration = this.tourForm.value.duration;
    const cost = this.tourForm.value.cost;
    const imageUrl = this.tourForm.value.imageUrl;

    this.isLoading = true;


    console.log(theme, typeOfExhibits, duration, cost, imageUrl);

    // this.authService.login(name, password)
    //   .subscribe(() => {
    //       this.router.navigate(['/']);
    //       this.isLoading = false;
    //     },
    //     errorMessage => {
    //       this.isLoading = false;
    //       this.error = errorMessage;
    //     });
  }

  onCloseAlert() {
    this.error = '';
  }
}
