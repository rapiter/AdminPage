import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Request} from '../models/request';
import {Style} from '../models/style';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  styleUrl = environment.baseUrl + 'styles';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getStyles(): Observable<Style[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Style[]>(this.styleUrl, httpOptions);
  }
}
