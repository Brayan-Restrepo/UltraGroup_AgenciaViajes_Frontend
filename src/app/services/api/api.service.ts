import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private url;

  constructor(
    private http: HttpClient
  ) {
    this.url = 'http://localhost:8080/';
  }


  public get<T>(path: string): Observable<T> {
    return this.http.get<T>(this.url + path);
  }

  public post<T>(path: string, data: any): Observable<T> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<T>(this.url + path, data, { headers });
  }
}
