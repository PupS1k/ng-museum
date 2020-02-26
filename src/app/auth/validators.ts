import { FormControl, ValidatorFn } from '@angular/forms';

export function confirmPassword(): ValidatorFn {
  return  (control: FormControl): any | null => {
    if (control.parent) {
      return control.value === control.parent.value.password ? null : control.value;
    } else {
      return true;
    }
  };
}
