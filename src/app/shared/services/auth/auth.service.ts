import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {take, map, catchError} from "rxjs/operators"
import {observable, Observable, of} from "rxjs";

interface AdminCredentials {
  username: string,
  password: string
}

interface TeamCredentials {
  id: string,
  code: string,
}

interface TokenBearer {
  error?: string,
  message: string,
  jwt_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginAdmin(credentials: AdminCredentials)  {
    return this.http
      .post<TokenBearer>(environment.base_url + 'auth/login/admin', credentials)
      .pipe(
        catchError((err) => {
          return of({ error: err.error.message, message: '', jwt_token: '' });
        }),
        take(1)
      );
  }

  loginTeam(credentials: TeamCredentials)  {
    return this.http
      .post<TokenBearer>(environment.base_url + 'auth/login/team', credentials)
      .pipe(
        catchError((err) => {
          return of({ error: err.error.message, message: '', jwt_token: '' });
        }),
        take(1)
      );
  }

  saveAuthToken(token: String) {
    localStorage.setItem('authorization', `JWT ${token}`);
  }

  deleteAuthToken() {
    localStorage.removeItem('authorization');
    this.router.navigate(['/auth/login/admin']);
  }
}
