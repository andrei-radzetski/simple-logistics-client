export class RestCredential {

  static setCredential(token: string, expires: number) {
    localStorage.setItem('access_token', token);
    localStorage.setItem('token_expires', expires.toString());
  }

  static destroyCredential() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_expires');
  }

  static getCurrentAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  static isAuthorized(): boolean {
    return !!RestCredential.getCurrentAccessToken();
  }

}
