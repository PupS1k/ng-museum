import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {handleError} from '../../shared/handleResponse';
import {Injectable} from '@angular/core';

@Injectable()
export class SignUpService {
  constructor(private http: HttpClient) {
  }

  signUp(name, password, age, email) {
    return this.http.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        name,
        password,
        age,
        email
      }).pipe(
      catchError(handleError),
      tap(resData => {
        console.log(resData);
      })
    );
  }

}
