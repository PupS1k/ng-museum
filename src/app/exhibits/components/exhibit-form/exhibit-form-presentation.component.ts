import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

import {ExhibitForm} from '../../models/exhibit-form.model';

@Component({
  selector: 'app-exhibit-form-presentation',
  templateUrl: './exhibit-form-presentation.component.html',
  styleUrls: ['./exhibit-form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExhibitFormPresentationComponent {
  @Input() exhibitForm: FormGroup;
  @Output() edit = new EventEmitter<ExhibitForm>();

  onSubmit() {
    const {
      title, dated,
      material, archiveNum,
      description,
      imageUrl
    } = this.exhibitForm.value;

    this.edit.emit({
      title, dated,
      material, archiveNum,
      description,
      imageUrl
    });
  }
}
