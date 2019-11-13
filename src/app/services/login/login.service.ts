import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements CanActivate {
  
  canActivate() {
    const sesion =  this.buscarSesionLocal() !== null;
    if (! sesion) {
      this.router.navigate(['login']);
    }
    return sesion;
  }

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  public loginUser(user: any): Observable<any> {
    return this.apiService.post<any>('login', user) .pipe(
      map(response => {
        this.guardarSesionLocal(response);
        return response;
      })
    );;
  }
  
  public buscarSesionLocal(): string {
    return localStorage.getItem('SESSION');
  }

  public guardarSesionLocal(usuario) {
    localStorage.setItem('SESSION', usuario.name);
  }

  public destroySesionLocal() {
    localStorage.removeItem('SESSION');
    this.router.navigate(['login']);
  }
}
