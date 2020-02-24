
export class User {
  public name: string;
  private _token: string;
  private readonly _tokenExpirationDate: Date;

  constructor(name: string, token: string, expirationDate: Date) {
    this.name = name;
    this._token = token;
    this._tokenExpirationDate = expirationDate;
  }

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this.token;
  }
}
