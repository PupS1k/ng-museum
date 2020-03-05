import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {confirmPassword} from '../../../auth/utils/validators';
import {GuidesService} from '../../services/guides.service';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-guide-edit',
  templateUrl: './guide-edit.component.html',
  styleUrls: ['./guide-edit.component.css']
})
export class GuideEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  error: string;
  isLoading = false;

  isUpdate: boolean;
  guideId: number;
  isUserUpdate = false;
  guideForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private guidesService: GuidesService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.isUpdate = !!data.guide;

        if (data.guide) {
          this.guideId = data.guide.guideId;

          const userData = JSON.parse(localStorage.getItem('userData'));
          if (userData) {
            this.isUserUpdate = userData.name === data.guide.username;
          }
        }

        this.guideForm = new FormGroup({
          name: new FormControl(
            data.guide ? data.guide.username : '',
            [Validators.required, Validators.minLength(2)]
          ),
          password: new FormControl(
            data.guide ? data.guide.password : '',
            [Validators.required]
          ),
          confirmPassword: new FormControl(
            data.guide ? data.guide.password : '',
            [Validators.required, confirmPassword()]
          ),
          fio: new FormControl(
            data.guide ? data.guide.fio : '',
            [Validators.required]
          ),
          experience: new FormControl(
            data.guide ? data.guide.experience : '',
            [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
          ),
          age: new FormControl(
            data.guide ? data.guide.age : '',
            [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
          ),
          languages: new FormControl(
            data.guide ? data.guide.languages : '',
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

    this.isLoading = true;

    if (this.isUpdate) {
      this.guidesService.updateGuide(this.guideId, username, password, fio, age, experience, languages)
        .subscribe(() => {
            if (this.isUserUpdate) {
              this.authService.changeUsername(username);
            } else {
              this.router.navigate(['/guides']);
              this.isLoading = false;
            }
          },
          errorMessage => {
            this.isLoading = false;
            this.error = errorMessage;
          });
    } else {
      this.guidesService.createGuide(username, password, fio, age, experience, languages)
        .subscribe(() => {
            this.router.navigate(['/guides']);
            this.isLoading = false;
          },
          errorMessage => {
            this.isLoading = false;
            this.error = errorMessage;
          });
    }
  }

  onCloseAlert() {
    this.error = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
