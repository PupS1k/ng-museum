import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-user-presentation',
  templateUrl: './create-user-presentation.component.html',
  styleUrls: ['./create-user-presentation.component.scss']
})
export class CreateUserPresentationComponent {
  @Input() userForm: FormGroup;
  @Input() isUpdate: boolean;
  @Output() submitForm = new EventEmitter<void>();

  onSubmit() {
    this.submitForm.emit();
  }

}
