import {AbstractControl, ValidatorFn} from '@angular/forms';

export function confirmPassword(password): ValidatorFn {
  return  (control: AbstractControl): any | null => {
    return control.value === password ? true : null;
  };
}
