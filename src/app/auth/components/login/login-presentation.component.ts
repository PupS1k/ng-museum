import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-presentation',
  templateUrl: './login-presentation.component.html',
  styleUrls: ['./login-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPresentationComponent {
  @Input() loginForm: FormGroup;
  @Output() submitLoginForm = new EventEmitter();

  onSubmit() {
    this.submitLoginForm.emit();
  }
}
