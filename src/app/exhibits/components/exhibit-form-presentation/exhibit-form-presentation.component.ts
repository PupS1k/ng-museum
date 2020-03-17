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
    const title = this.exhibitForm.value.title;
    const dated = this.exhibitForm.value.dated;
    const material = this.exhibitForm.value.material;
    const archiveNum = this.exhibitForm.value.archiveNum;
    const description = this.exhibitForm.value.description;
    const imageUrl = this.exhibitForm.value.imageUrl;

    this.edit.emit({
      title, dated,
      material, archiveNum,
      description,
      imageUrl
    });
  }
}
