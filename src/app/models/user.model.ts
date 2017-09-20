export class User {
  public username: string;
  public email: string;
  public password: string;
  public userId: string;

  constructor(username: string, email: string, password: string, userId: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.userId = userId;
  }
}
