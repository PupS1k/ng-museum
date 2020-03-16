import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {VisitorForm} from '../../../visitors/models/visitor-form.model';

@Component({
  selector: 'app-create-user-presentation',
  templateUrl: './create-user-presentation.component.html',
  styleUrls: ['./create-user-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUserPresentationComponent {
  @Input() userForm: FormGroup;
  @Input() isUpdate: boolean;
  @Output() submitForm = new EventEmitter<VisitorForm>();

  onSubmit() {
    const username = this.userForm.value.name;
    const password = this.userForm.value.password;
    const age = this.userForm.value.age;
    const fio = this.userForm.value.fio;
    const email = this.userForm.value.email;

    this.submitForm.emit({
      username, password, age, fio, email
    });
  }

}
