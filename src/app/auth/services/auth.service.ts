import { computed, inject, Injectable, signal } from '@angular/core';
// import { environments } from '../../../environments/environments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { AuthStatus, LoginResponse, User } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private readonly baseUrl: string = `${environments.baseUrl}/auth`;
  // private http = inject(HttpClient);

  // private _currentUser = signal<User | null>(null)
  // private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  // public currentUser = computed(() => this._currentUser());
  // public authStatus = computed(() => this._authStatus());


  // constructor() { }

  // private setAuthentication(user: User, token: string): boolean {
  //   this._currentUser.set(user);
  //   this._authStatus.set(AuthStatus.authenticated);
  //   console.log(this.currentUser())
  //   localStorage.setItem('token', token);
  //   return true;
  // }

  // login(email: string, password: string): Observable<boolean> {

  //   const url = `${this.baseUrl}/login`;
  //   const body = { email, password };

  //   return this.http.post<LoginResponse>(url, body)
  //     .pipe(
  //       map(({ user, token }) => this.setAuthentication(user, token)),
  //       catchError(err => {
  //         console.log(err);
  //         switch (err.status) {
  //           case 0:
  //             return throwError(() => 'Internal Server Error')
  //             break;
  //           case 401 | 400:
  //             return throwError(() => 'Not Valid Credentials')
  //           default:
  //             return throwError(() => err.error.message)
  //             break;
  //         }
  //       })
  //     )
  // }

  // checkAuthStatus(): Observable<boolean> {
  //   const url = `${this.baseUrl}/check-status`;
  //   const token = localStorage.getItem('token');

  //   if(!token) {
  //     this.logout();
  //     return of(false);
  //   }

  //   const headers = new HttpHeaders()
  //     .set('Authorization', `Bearer ${token}`);

  //   return this.http.get<CheckTokenResponse>(url, {headers: headers})
  //     .pipe(

  //       map(({token, user}) => this.setAuthentication(user, token)),
  //       catchError(() => {
  //         this._authStatus.set(AuthStatus.notAuthenticated);
  //         return of(false);
  //       })
  //     )

  // }


  // logout() {
  //   localStorage.removeItem('token');
  //   this._currentUser.set(null);
  //   this._authStatus.set( AuthStatus.notAuthenticated );
  // }

}
