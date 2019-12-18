import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(environment.baseUrl + 'authentication', { username, password })
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response.token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(
            { name: response.name, token: response.token , isAdmin: response.isAdmin, id: response.id}));
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }));
  }

  getUser(): User {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return JSON.parse(user);
    }
  }

  getToken(): string {
    return this.getUser() ? this.getUser().token : undefined;
  }

  getUserId(): number {
    return this.getUser() ? this.getUser().id : undefined;
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  getAdmin(): number {
    return this.getUser() ? this.getUser().isAdmin : undefined;
  }

}
