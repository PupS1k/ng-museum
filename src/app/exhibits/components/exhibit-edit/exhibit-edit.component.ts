import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

import {Tour} from '../../../tours/models/tour.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {CloseErrorAlert, UpdateExhibitStart} from '../../store/exhibit.actions';

@Component({
  selector: 'app-exhibit-edit',
  templateUrl: './exhibit-edit.component.html',
  styleUrls: ['./exhibit-edit.component.scss']
})
export class ExhibitEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  exhibitId: number;
  tours: Tour[];
  error = '';
  isLoading = false;

  exhibitForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select('exhibits')
      .pipe(takeUntil(this.destroy$))
      .subscribe(exhibitsState => {
        this.exhibitId = exhibitsState.selectedExhibit.exhibitId;
        this.tours = exhibitsState.selectedExhibit.tourEntitySet;

        this.error = exhibitsState.errorMessage;
        this.isLoading = exhibitsState.loading;

        this.exhibitForm = new FormGroup({
          title: new FormControl(exhibitsState.selectedExhibit.title, [Validators.required, Validators.minLength(3)]),
          dated: new FormControl(exhibitsState.selectedExhibit.dated, [Validators.required]),
          material: new FormControl(exhibitsState.selectedExhibit.material, [Validators.required]),
          archiveNum: new FormControl(exhibitsState.selectedExhibit.archiveNum, [Validators.required]),
          description: new FormControl(exhibitsState.selectedExhibit.description, [Validators.required]),
          imageUrl: new FormControl(exhibitsState.selectedExhibit.imageUrl, [Validators.required]),
        });
      });
  }

  onSubmit() {
    const title = this.exhibitForm.value.title;
    const dated = this.exhibitForm.value.dated;
    const material = this.exhibitForm.value.material;
    const archiveNum = this.exhibitForm.value.archiveNum;
    const description = this.exhibitForm.value.description;
    const imageUrl = this.exhibitForm.value.imageUrl;


    this.store.dispatch(new UpdateExhibitStart({
      exhibitId: this.exhibitId,
      title, dated,
      material, archiveNum,
      description,
      imageUrl,
      tourEntitySet: this.tours
    }));
  }

  onCloseAlert() {
    this.store.dispatch(new CloseErrorAlert());
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
