export interface UserData {
  username: string;
  token: string;
  tokenExpirationDate: Date | number;
  roles: string[];
}
