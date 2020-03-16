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

  @Output() submitForm = new EventEmitter<GuideForm>();

  onSubmit() {
    const username = this.guideForm.value.name;
    const password = this.guideForm.value.password;
    const experience = this.guideForm.value.experience;
    const age = this.guideForm.value.age;
    const fio = this.guideForm.value.fio;
    const languages = this.guideForm.value.languages;

    this.submitForm.emit(
      {
        guide: {
          guideId: null, username, password, fio, age, experience, languages
        },
        isUpdate: this.isUpdate
      }
    );
  }
}
