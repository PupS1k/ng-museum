import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-presentation',
  templateUrl: './login-presentation.component.html',
  styleUrls: ['./login-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPresentationComponent implements OnInit {
  @Input() loginForm: FormGroup;
  @Output() submitLoginForm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitLoginForm.emit();
  }

}
