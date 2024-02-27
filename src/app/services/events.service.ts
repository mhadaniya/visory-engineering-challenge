import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Event } from '../models/event';
import { environment } from '../../enviroment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = '/api/discovery/v2/events';
  private headers: HttpHeaders;
  private params: HttpParams;
  page: number = 1;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.params = new HttpParams()
      .set('apikey', environment.API_KEY);

  }

  getEvents(keyword: string, city: string): Observable<Event[]> {
    const params = this.params.set('keyword', keyword)
      .set('city', city);
    console.log(params);
    return this.http.get<any>(this.apiUrl, {
      headers: this.headers,
      params: params
    })
      .pipe(
        map((response) => {
          // console.log(response._embedded)
          if(!response._embedded) return [];

          return response._embedded.events as Event[]})
      );
  }
}
