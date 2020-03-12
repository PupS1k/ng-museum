import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Tour} from '../../../tours/models/tour.model';
import {AppState} from '../../../app.reducer';
import {Store} from '@ngrx/store';
import {createFormVisitor} from '../../utils';
import {selectVisitorState} from '../../store/visitor.selectors';
import {CreateVisitorStart, UpdateVisitorStart} from '../../store/visitor.actions';

@Component({
  selector: 'app-visitor-edit',
  templateUrl: './visitor-edit.component.html',
  styleUrls: ['./visitor-edit.component.scss']
})
export class VisitorEditComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  isUpdate: boolean;
  visitorId: number;
  visitorForm: FormGroup;
  tours?: Tour[] = [];

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectVisitorState)
      .pipe(takeUntil(this.destroy$))
      .subscribe(visitorState => {
        this.isUpdate = !!visitorState.selectedVisitor;

        if (visitorState.selectedVisitor) {
          this.visitorId = visitorState.selectedVisitor.visitorId;
          this.tours = visitorState.selectedVisitor.tourEntitySet;
        }

        this.visitorForm = createFormVisitor(visitorState.selectedVisitor);
      });
  }

  onSubmit() {
    const username = this.visitorForm.value.name;
    const password = this.visitorForm.value.password;
    const age = this.visitorForm.value.age;
    const fio = this.visitorForm.value.fio;
    const email = this.visitorForm.value.email;

    if (this.isUpdate) {
      this.store.dispatch(new UpdateVisitorStart({
        visitorId: this.visitorId,
        username,
        password,
        fio,
        email,
        age,
        tourEntitySet: this.tours
      }));
    } else {
      this.store.dispatch(new CreateVisitorStart({
        username,
        password,
        fio,
        email,
        age
      }));
    }

    this.router.navigate(['/visitors']);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
