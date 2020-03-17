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
    const theme = this.tourForm.value.theme;
    const typeOfExhibits = this.tourForm.value.typeOfExhibits;
    const duration = this.tourForm.value.duration;
    const cost = this.tourForm.value.cost;
    const imageUrl = this.tourForm.value.imageUrl;

    this.edit.emit({
      typeOfExhibits,
      theme,
      cost,
      imageUrl,
      duration
    });
  }
}
