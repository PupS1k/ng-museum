import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guide-edit-presentation',
  templateUrl: './guide-edit-presentation.component.html',
  styleUrls: ['./guide-edit-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GuideEditPresentationComponent {
  @Input() guideForm: FormGroup;
  @Input() isUpdate: boolean;

  @Output() submitForm = new EventEmitter<void>();

  onSubmit() {
    this.submitForm.emit();
  }
}
