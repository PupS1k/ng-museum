import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';

import {AppState} from '../../../app.reducer';
import {UpdateExhibitStart} from '../../store/exhibit.actions';
import {selectExhibit, selectExhibitTours} from '../../store/exhibits.selectors';

@Component({
  selector: 'app-exhibit-edit',
  templateUrl: './exhibit-edit.component.html',
  styleUrls: ['./exhibit-edit.component.scss']
})
export class ExhibitEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  tours$ = this.store.select(selectExhibitTours);
  exhibitForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectExhibit)
      .pipe(takeUntil(this.destroy$))
      .subscribe(exhibit => {
        this.exhibitForm = new FormGroup({
          title: new FormControl(exhibit.title, [Validators.required, Validators.minLength(3)]),
          dated: new FormControl(exhibit.dated, [Validators.required]),
          material: new FormControl(exhibit.material, [Validators.required]),
          archiveNum: new FormControl(exhibit.archiveNum, [Validators.required]),
          description: new FormControl(exhibit.description, [Validators.required]),
          imageUrl: new FormControl(exhibit.imageUrl, [Validators.required]),
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
      title, dated,
      material, archiveNum,
      description,
      imageUrl
    }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
