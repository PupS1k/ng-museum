import {AbstractControl, ValidatorFn} from '@angular/forms';

export function IsPositiveNumber(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return Number(control.value) > 0 ? null : {number: {value: control.value}};
  };
}
