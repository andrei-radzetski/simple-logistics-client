export class RestCredential {

  static setCredential(token: string, expires: number, scope: string, user: string) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('token_expires', expires.toString());
    localStorage.setItem('scope', scope);
    localStorage.setItem('user', user);
  }

  static destroyCredential() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_expires');
    localStorage.removeItem('scope');
    localStorage.removeItem('user');
  }

  static getCurrentAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  static getScope(): string {
    return localStorage.getItem('scope');
  }

  static getUser(): string {
    return localStorage.getItem('scope');
  }

  static checkUser(user: string): boolean {
    let localUser = RestCredential.getUser();
    return localUser && localUser === user;
  }

  static isAuthorized(): boolean {
    return !!RestCredential.getCurrentAccessToken();
  }

  static isAdmin(): boolean {
    return RestCredential.isAuthorized() && (RestCredential.getScope() === 'admin' || RestCredential.getScope() === '*');
  }

}
