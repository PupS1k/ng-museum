import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up-presentation',
  templateUrl: './sign-up-presentation.component.html',
  styleUrls: ['./sign-up-presentation.component.css']
})
export class SignUpPresentationComponent implements OnInit {
  @Input() signUpForm: FormGroup;
  @Output() signUp = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.signUp.emit();
  }

}
