import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Tour} from '../../../tours/models/tour.model';

@Component({
  selector: 'app-exhibit-edit-presentation',
  templateUrl: './exhibit-edit-presentation.component.html',
  styleUrls: ['./exhibit-edit-presentation.component.scss']
})
export class ExhibitEditPresentationComponent {

  @Input() exhibitForm: FormGroup;
  @Input() tours: Tour[];
  @Output() edit = new EventEmitter<void>();

  onSubmit() {
    this.edit.emit();
  }

}
