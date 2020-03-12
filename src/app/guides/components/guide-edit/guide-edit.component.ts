import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {ClearSelectedGuide, CreateGuideStart, UpdateGuideStart} from '../../store/guide.actions';
import {selectFormGuide, selectIsUpdateGuide} from '../../store/guide.selectors';

@Component({
  selector: 'app-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.scss']
})
export class GuideEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  isUpdate: boolean;
  guideForm: FormGroup;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
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
        new UpdateGuideStart({guideId: null, username, password, fio, age, experience, languages})
      );
    } else {
      this.store.dispatch(
        new CreateGuideStart({username, password, fio, age, experience, languages})
      );
    }

    this.router.navigate(['/guides']);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ClearSelectedGuide());
    this.destroy$.next();
    this.destroy$.complete();
  }
}
