import {Role} from './role.model';

export class User {
  public name: string;
  private _token: string;
  private readonly _tokenExpirationDate: Date;
  public role: Role[];

  constructor(name: string, token: string, expirationDate: Date, role: Role[]) {
    this.name = name;
    this._token = token;
    this._tokenExpirationDate = expirationDate;
    this.role = role;
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
