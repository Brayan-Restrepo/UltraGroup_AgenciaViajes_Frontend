import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private url;

  constructor(
    private http: HttpClient
  ) {
    console.log(environment.production);
    console.log(environment.apiUrl);
    // this.url = environment.apiUrl;
    this.url = 'https://ultragroupagenciaviajes.herokuapp.com/';
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
