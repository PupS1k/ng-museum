import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../auth/utils/validators';


export const createFormVisitor = (visitor) => {
  return new FormGroup({
    name: new FormControl(
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
      [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
    ),
    email: new FormControl(
      visitor ? visitor.email : '',
      [Validators.required]
    ),
  });
};
