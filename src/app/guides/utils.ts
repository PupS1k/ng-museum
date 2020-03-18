import {FormControl, FormGroup, Validators} from '@angular/forms';
import {confirmPassword} from '../auth/utils/validators';


export const createFormGuide = (guide) => {
  return new FormGroup({
    username: new FormControl(
      guide ? guide.username : '',
      [Validators.required, Validators.minLength(2)]
    ),
    password: new FormControl(
      guide ? guide.password : '',
      [Validators.required]
    ),
    confirmPassword: new FormControl(
      guide ? guide.password : '',
      [Validators.required, confirmPassword()]
    ),
    fio: new FormControl(
      guide ? guide.fio : '',
      [Validators.required]
    ),
    experience: new FormControl(
      guide ? guide.experience : '',
      [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
    ),
    age: new FormControl(
      guide ? guide.age : '',
      [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
    ),
    languages: new FormControl(
      guide ? guide.languages : '',
      [Validators.required]),
  });
};
