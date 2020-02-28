export class User {
  public name: string;
  private _token: string;
  private readonly _tokenExpirationDate: Date;
  public roles: string[];

  constructor(name: string, token: string, expirationDate: Date, roles: string[]) {
    this.name = name;
    this._token = token;
    this._tokenExpirationDate = expirationDate;
    this.roles = roles;
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}
