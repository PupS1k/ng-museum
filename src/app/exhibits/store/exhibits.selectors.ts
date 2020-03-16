import {AppState} from '../../app.reducer';
import {createSelector} from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';

export const selectExhibitState = (state: AppState) => state.exhibits;

export const selectExhibits = createSelector(
  selectExhibitState,
  (state) => state.exhibits
);

export const selectExhibit = createSelector(
  selectExhibitState,
  (state) => state.selectedExhibit
);

export const selectExhibitForm = createSelector(
  selectExhibit,
  exhibit => new FormGroup({
    title: new FormControl(exhibit.title, [Validators.required, Validators.minLength(3)]),
    dated: new FormControl(exhibit.dated, [Validators.required]),
    material: new FormControl(exhibit.material, [Validators.required]),
    archiveNum: new FormControl(exhibit.archiveNum, [Validators.required]),
    description: new FormControl(exhibit.description, [Validators.required]),
    imageUrl: new FormControl(exhibit.imageUrl, [Validators.required])
  })
);

export const selectExhibitId = createSelector(
  selectExhibit,
  (exhibit) => exhibit.exhibitId
);

export const selectExhibitTours = createSelector(
  selectExhibit,
  (exhibit) => exhibit.tourEntitySet
);

export const selectIsExhibit = createSelector(
  selectExhibit,
  (exhibit) => !!exhibit
);
