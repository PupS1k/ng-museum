import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Visitor} from '../../models/visitor.model';

@Component({
  selector: 'app-visitor-edit',
  templateUrl: './visitor-edit.component.html',
  styleUrls: ['./visitor-edit.component.css']
})
export class VisitorEditComponent implements OnInit {

  visitor: Visitor;
  error: string;
  isLoading = false;

  visitorForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.visitor = data.visitor;
      this.visitorForm = new FormGroup({
        username: new FormControl(this.visitor.username, [Validators.required, Validators.minLength(2)]),
        password: new FormControl(this.visitor.password, [Validators.required]),
        fio: new FormControl(this.visitor.fio, [Validators.required]),
        age: new FormControl(this.visitor.age, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        email: new FormControl(this.visitor.email, [Validators.required]),
      });
    });
  }

  onSubmit() {
    // const theme = this.visitorForm.value.theme;
    // const typeOfExhibits = this.visitorForm.value.typeOfExhibits;
    // const duration = this.visitorForm.value.duration;
    // const cost = this.visitorForm.value.cost;
    // const imageUrl = this.visitorForm.value.imageUrl;
    //
    // this.isLoading = true;
    //
    //
    // console.log(theme, typeOfExhibits, duration, cost, imageUrl);

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
