import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {confirmPassword} from '../../../auth/utils/validators';
import {Store} from '@ngrx/store';
import {AppState} from '../../../app.reducer';
import {ClearSelectedGuide, CreateGuideStart, UpdateGuideStart} from '../../store/guide.actions';

@Component({
  selector: 'app-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.scss']
})
export class GuideEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  message: string;
  isLoading = false;

  isUpdate: boolean;
  guideId: number;
  isUserUpdate = false;
  guideForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(state => state.guides.selectedGuide)
      .pipe(takeUntil(this.destroy$))
      .subscribe(guide => {
        this.isUpdate = !!guide;

        if (guide) {
          this.guideId = guide.guideId;

          const userData = JSON.parse(localStorage.getItem('userData'));
          if (userData) {
            this.isUserUpdate = userData.name === guide.username;
          }
        }

        this.guideForm = new FormGroup({
          name: new FormControl(
            guide ? guide.username : '',
            [Validators.required, Validators.minLength(2)]
          ),
          password: new FormControl(
            guide ? guide.password : '',
            [Validators.required]
          ),
          confirmPassword: new FormControl(
            guide ? guide.password : '',
            [Validators.required, confirmPassword()]
          ),
          fio: new FormControl(
            guide ? guide.fio : '',
            [Validators.required]
          ),
          experience: new FormControl(
            guide ? guide.experience : '',
            [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
          ),
          age: new FormControl(
            guide ? guide.age : '',
            [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
          ),
          languages: new FormControl(
            guide ? guide.languages : '',
            [Validators.required]),
        });

      });
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
