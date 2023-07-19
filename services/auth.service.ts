class AuthService {
  _userId = "xxxx";
  _userEmail = "hello@paytweed.com";

  getAuthUser() {
    return {
      id: this._userId,
      email: this._userEmail,
    };
  }

  updateUser({ email, id }: { email: string; id: string }) {
    if (id) this._userId = id;
    if (email) this._userEmail = email;
    return this.getAuthUser();
  }
}

export default new AuthService();
