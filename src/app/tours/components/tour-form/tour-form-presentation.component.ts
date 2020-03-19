import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {TourForm} from '../../models/tour-form.model';

@Component({
  selector: 'app-tour-form-presentation',
  templateUrl: './tour-form-presentation.component.html',
  styleUrls: ['./tour-form-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourFormPresentationComponent {
  @Input() tourForm: FormGroup;

  @Output() edit = new EventEmitter<TourForm>();

  onSubmit() {
    const tourFormData: {
      typeOfExhibits,
      theme,
      cost,
      imageUrl,
      duration
    } = this.tourForm.value;

    this.edit.emit(tourFormData);
  }
}
