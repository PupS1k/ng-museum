import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {VisitorsService} from '../../services/visitors.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {confirmPassword} from '../../../auth/utils/validators';
import {Tour} from '../../../tours/models/tour.model';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-visitor-edit',
  templateUrl: './visitor-edit.component.html',
  styleUrls: ['./visitor-edit.component.css']
})
export class VisitorEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  error: string;
  isLoading = false;

  isUpdate: boolean;
  isUpdateUser = false;
  visitorId: number;
  visitorForm: FormGroup;
  tours?: Tour[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private visitorsService: VisitorsService,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.isUpdate = !!data.visitor;

        if (data.visitor) {
          this.visitorId = data.visitor.visitorId;
          this.tours = data.visitor.tourEntitySet;

          const userData = JSON.parse(localStorage.getItem('userData'));
          if (userData) {
            this.isUpdateUser = userData.name === data.visitor.username;
          }
        }

        this.visitorForm = new FormGroup({
          name: new FormControl(
            data.visitor ? data.visitor.username : '',
            [Validators.required, Validators.minLength(2)]
          ),
          password: new FormControl(
            data.visitor ? data.visitor.password : '',
            [Validators.required]
          ),
          confirmPassword: new FormControl(
            data.visitor ? data.visitor.password : '',
            [Validators.required, confirmPassword()]
          ),
          fio: new FormControl(
            data.visitor ? data.visitor.fio : '',
            [Validators.required]
          ),
          age: new FormControl(
            data.visitor ? data.visitor.age : '',
            [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
          ),
          email: new FormControl(
            data.visitor ? data.visitor.email : '',
            [Validators.required]),
        });

      });
  }

  onSubmit() {
    const username = this.visitorForm.value.name;
    const password = this.visitorForm.value.password;
    const age = this.visitorForm.value.age;
    const fio = this.visitorForm.value.fio;
    const email = this.visitorForm.value.email;

    this.isLoading = true;

    if (this.isUpdate) {
      this.visitorsService.updateVisitor(this.visitorId, username, password, fio, email, age, this.tours)
        .subscribe(() => {
            if (this.isUpdateUser) {
              this.authService.changeUsername(username);
            } else {
              this.router.navigate(['/visitors']);
              this.isLoading = false;
            }
          },
          errorMessage => {
            this.isLoading = false;
            this.error = errorMessage;
          });
    } else {
      this.visitorsService.createVisitor(username, password, fio, email, age)
        .subscribe(() => {
            this.router.navigate(['/visitors']);
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
