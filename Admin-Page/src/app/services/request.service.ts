import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Composition} from '../models/composition';
import {Request} from '../models/request';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  requestUrl = environment.baseUrl + 'request';


  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getRequests(): Observable<Request[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Request[]>(this.requestUrl, httpOptions);
  }

  getRequest(id: number): Observable<Request> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.get<Request>(this.requestUrl + '/' + id, httpOptions);
  }

  updateRequest(request: Request): Observable<Request> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.put<Request>(this.requestUrl + '/' + request.id, request, httpOptions);
  }

  addRequest(request: Request): Observable<Request> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post<Request>(this.requestUrl, request, httpOptions);
  }

  deleteRequest(request: Request): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    const id = typeof request === 'number' ? request : request.id;
    const url = `${this.requestUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
