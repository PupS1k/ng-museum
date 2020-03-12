import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {UpdateGuideStart} from '../../../guides/store/guide.actions';
import {selectFavouriteTours, selectUserForm, selectUserId, selectUserIsGuide, selectUserIsVisitor} from '../../store/profile.selectors';
import {FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {
  FetchGuideInfoSuccess,
  FetchVisitorInfoSuccess,
} from '../../store/profile.actions';
import {UpdateVisitorStart} from '../../../visitors/store/visitor.actions';
import {Tour} from '../../../tours/models/tour.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  userIsGuide: boolean;
  userIsVisitor = this.store.select(selectUserIsVisitor);
  userId: number;
  tours: Tour[] = [];
  userForm: FormGroup;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(state => selectUserForm(state))
      .pipe(takeUntil(this.destroy$))
      .subscribe(userForm => this.userForm = userForm);

    this.store.select(state => selectUserId(state))
      .pipe(takeUntil(this.destroy$))
      .subscribe(userId => this.userId = userId);

    this.store.select(state => selectUserIsGuide(state))
      .pipe(takeUntil(this.destroy$))
      .subscribe(isGuide => this.userIsGuide = isGuide);

    this.store.select(selectFavouriteTours)
      .pipe(takeUntil(this.destroy$))
      .subscribe(tours => this.tours = tours);
  }

  onSubmit() {
    const username = this.userForm.value.name;
    const password = this.userForm.value.password;
    const age = this.userForm.value.age;
    const fio = this.userForm.value.fio;

    if (this.userIsGuide) {
      const experience = this.userForm.value.experience;
      const languages = this.userForm.value.languages;

      this.store.dispatch(new UpdateGuideStart({
        guideId: this.userId,
        username, password, experience, age, fio, languages
      }));

      this.store.dispatch(new FetchGuideInfoSuccess({
        guideId: this.userId,
        username, password, experience, age, fio, languages
      }));

    } else {
      const email = this.userForm.value.email;

      this.store.dispatch(new UpdateVisitorStart({
        visitorId: this.userId,
        username, password, age, fio, email, tourEntitySet: this.tours}));

      this.store.dispatch(new FetchVisitorInfoSuccess({
        visitorId: this.userId,
        username, password, age, fio, email, tourEntitySet: this.tours}));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
