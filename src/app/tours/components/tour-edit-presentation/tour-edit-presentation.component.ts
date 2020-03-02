import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Tour} from '../../models/tour.model';

@Component({
  selector: 'app-tour-edit-presentation',
  templateUrl: './tour-edit-presentation.component.html',
  styleUrls: ['./tour-edit-presentation.component.css']
})
export class TourEditPresentationComponent implements OnInit {

  @Input() tourForm: FormGroup;

  @Output() edit = new EventEmitter<void>();

  imageUrl = '';

  constructor() { }

  ngOnInit(): void {
    this.imageUrl = this.tourForm.value.imageUrl;
  }

  onSubmit() {
    this.edit.emit();
  }
}
