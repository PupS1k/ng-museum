import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {ClearSelectedGuide, CreateGuideStart, UpdateGuideStart} from '../../store/guide.actions';
import {selectFormGuide, selectGuideId, selectIsUpdateGuide} from '../../store/guide.selectors';

@Component({
  selector: 'app-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.scss']
})
export class GuideEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  message: string;

  isUpdate: boolean;
  guideId: number;
  guideForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectGuideId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(guideId => this.guideId = guideId);

    this.store.select(selectFormGuide)
      .pipe(takeUntil(this.destroy$))
      .subscribe(formGuide => this.guideForm = formGuide);

    this.store.select(selectIsUpdateGuide)
      .pipe(takeUntil(this.destroy$))
      .subscribe(isUpdate => this.isUpdate = isUpdate);
  }

  onSubmit() {
    const username = this.guideForm.value.name;
    const password = this.guideForm.value.password;
    const experience = this.guideForm.value.experience;
    const age = this.guideForm.value.age;
    const fio = this.guideForm.value.fio;
    const languages = this.guideForm.value.languages;

    if (this.isUpdate) {
      this.store.dispatch(
        new UpdateGuideStart({guideId: this.guideId, username, password, fio, age, experience, languages})
      );
    } else {
      this.store.dispatch(
        new CreateGuideStart({guideId: null, username, password, fio, age, experience, languages})
      );
    }

    this.router.navigate(['/guides']);
  }

  onCloseAlert() {
    this.message = '';
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedGuide());
    this.destroy$.next();
    this.destroy$.complete();
  }
}
