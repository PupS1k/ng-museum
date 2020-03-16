import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {VisitorForm} from '../../models/visitor-form.model';

@Component({
  selector: 'app-visitor-edit-presentation',
  templateUrl: './visitor-edit-presentation.component.html',
  styleUrls: ['./visitor-edit-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorEditPresentationComponent {
  @Input() userForm: FormGroup;
  @Input() isUpdate: boolean;
  @Output() create = new EventEmitter<VisitorForm>();
  @Output() update = new EventEmitter<VisitorForm>();

  onSubmit() {
    const username = this.userForm.value.name;
    const password = this.userForm.value.password;
    const age = this.userForm.value.age;
    const fio = this.userForm.value.fio;
    const email = this.userForm.value.email;

    if (this.isUpdate) {
      this.update.emit({username, password, age, fio, email});
    } else {
      this.create.emit({username, password, age, fio, email});
    }
  }

}
