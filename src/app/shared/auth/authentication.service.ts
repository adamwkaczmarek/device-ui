import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthService} from 'ngx-auth';
import {TokenStorage} from './token-storage.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


interface AccessData {
  access_token: string;
  refresh_token: string;
}


@Injectable()
export class AuthenticationService implements AuthService {

  constructor(private http: HttpClient,
              private tokenStorage: TokenStorage) {
  }

  /**
   * Check, if user already authorized.
   * @description Should return Observable with true or false values
   * @returns {Observable<boolean>}
   * @memberOf AuthService
   */
  public isAuthorized(): Observable<boolean> {
    return this.tokenStorage
      .getAccessToken()
      .map(token => !!token);
  }

  /**
   * Get access token
   * @description Should return access token in Observable from e.g.
   * localStorage
   * @returns {Observable<string>}
   */
  public getAccessToken(): Observable<string> {
    return this.tokenStorage.getAccessToken();
  }

  /**
   * Function, that should perform refresh token verifyTokenRequest
   * @description Should be successfully completed so interceptor
   * can execute pending requests or retry original one
   * @returns {Observable<any>}
   */
  public refreshToken(): Observable<any> {
    return this.tokenStorage
      .getRefreshToken()
      .switchMap((refreshToken: string) => {
        return this.http.post('http://localhost:5555/auth/auth/oauth/refresh', {refreshToken});
      })
      .do(this.saveAccessData.bind(this))
      .catch((err) => {
        this.logout();

        return Observable.throw(err);
      });
  }

  /**
   * Function, checks response of failed request to determine,
   * whether token be refreshed or not.
   * @description Essentialy checks status
   * @param {Response} response
   * @returns {boolean}
   */
  public refreshShouldHappen(response: HttpErrorResponse): boolean {
    return response.status === 401;
  }

  /**
   * Verify that outgoing request is refresh-token,
   * so interceptor won't intercept this request
   * @param {string} url
   * @returns {boolean}
   */
  public verifyTokenRequest(url: string): boolean {
    return url.endsWith('/refresh');
  }


  public login(username: string, password: string): Observable<any> {

    const basicAuthHeader = btoa('springcloudtemp:sct_secret');
    const payload = 'username=' + encodeURIComponent(username) + '&password='
      + encodeURIComponent(password) + '&grant_type=password';


    const headers = new HttpHeaders({
      'Authorization': `Basic ${basicAuthHeader}`,
      'Content-Type': `application/x-www-form-urlencoded`,
      'Accept': `application/json`
    });


    return this.http.post<AccessData>('/oauth/token', payload, {headers: headers})
      .do((tokens: AccessData) => this.saveAccessData(tokens));
  }

  /**
   * Logout
   */
  public logout(): void {
    this.tokenStorage.clear();
    location.reload(true);
  }

  /**
   * Save access data in the storage
   *
   * @private
   * @param {AccessData} data
   */
  private saveAccessData({access_token, refresh_token}: AccessData) {
    this.tokenStorage
      .setAccessToken(access_token)
      .setRefreshToken(refresh_token);
  }
}
