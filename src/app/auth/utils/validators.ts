import { FormControl, ValidatorFn } from '@angular/forms';

export function confirmPassword(): ValidatorFn {
  return  (control: FormControl): { [key: string]: any } | null => {
    if (control.parent) {
      return control.value === control.parent.value.password ? null : {password: {value: control.value}};
    }
    return {password: {value: control.value}};
  };
}
