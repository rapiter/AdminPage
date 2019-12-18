import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Composition} from '../models/composition';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class CompositionService {
  compositionUrl = environment.baseUrl + 'composition';


  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getCompositions(): Observable<Composition[]> {
    return this.http.get<Composition[]>(this.compositionUrl);
  }

  getComposition(id: number): Observable<Composition> {
    return this.http.get<Composition>(this.compositionUrl + '/' + id);
  }

  updateComposition(composition: Composition): Observable<Composition> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.put<Composition>(this.compositionUrl + '/' + composition.id, composition, httpOptions);
  }

  addComposition(composition: Composition): Observable<Composition> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.http.post<Composition>(this.compositionUrl, composition, httpOptions);
  }

  deleteComposition(composition: Composition): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    const id = typeof composition === 'number' ? composition : composition.id;
    const url = `${this.compositionUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
