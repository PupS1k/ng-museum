import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tour-edit-presentation',
  templateUrl: './tour-edit-presentation.component.html',
  styleUrls: ['./tour-edit-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourEditPresentationComponent {

  @Input() tourForm: FormGroup;

  @Output() edit = new EventEmitter<void>();

  onSubmit() {
    this.edit.emit();
  }
}
