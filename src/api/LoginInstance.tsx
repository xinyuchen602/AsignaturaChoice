import {User} from '../model/model';

class LoginInstance {
  public user: User | null;

  constructor() {
    this.user = null;
  }

  saveLogIn(user: User) {
    this.user = user;
  }

  logOut() {
    this.user = null;
  }
}

export default new LoginInstance();
