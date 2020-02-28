import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-exhibit-edit-presentation',
  templateUrl: './exhibit-edit-presentation.component.html',
  styleUrls: ['./exhibit-edit-presentation.component.css']
})
export class ExhibitEditPresentationComponent implements OnInit {

  @Input() exhibitForm: FormGroup;
  @Input() tours: Tour[];
  @Output() edit = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.edit.emit();
  }

}
