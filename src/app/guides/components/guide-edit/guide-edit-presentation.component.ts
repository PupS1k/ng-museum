import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {GuideForm} from '../../models/guide-form.model';

@Component({
  selector: 'app-guide-edit-presentation',
  templateUrl: './guide-edit-presentation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideEditPresentationComponent {
  @Input() guideForm: FormGroup;
  @Input() isUpdate: boolean;

  @Output() create = new EventEmitter<GuideForm>();
  @Output() update = new EventEmitter<GuideForm>();

  onSubmit() {
    const guideFormDate: {username, password, fio, age, experience, languages} = this.guideForm.value;

    if (this.isUpdate) {
      this.update.emit(guideFormDate);
    } else {
      this.create.emit(guideFormDate);
    }
  }
}
