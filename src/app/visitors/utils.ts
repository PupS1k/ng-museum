import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../auth/utils/validators';
import {IsPositiveNumber} from '../core/utils';


export const createFormVisitor = (visitor) => {
  return new FormGroup({
    username: new FormControl(
      visitor ? visitor.username : '',
      [Validators.required, Validators.minLength(2)]
    ),
    password: new FormControl(
      visitor ? visitor.password : '',
      [Validators.required]
    ),
    confirmPassword: new FormControl(
      visitor ? visitor.password : '',
      [Validators.required, confirmPassword()]
    ),
    fio: new FormControl(
      visitor ? visitor.fio : '',
      [Validators.required]
    ),
    age: new FormControl(
      visitor ? visitor.age : '',
      [Validators.required, IsPositiveNumber()]
    ),
    email: new FormControl(
      visitor ? visitor.email : '',
      [Validators.required]
    ),
  });
};
