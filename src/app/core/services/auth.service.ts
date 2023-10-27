import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@memento/Storage';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { AlertSwalService } from './alert-swal.service';
import { throwError } from 'rxjs';
import { ROUTER } from '@constants/routers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri: string = 'https://api.escuelajs.co/api/v1/auth/login';

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient,
    private route: Router,
    private alert: AlertSwalService
  ) { }

  public login(item: Object) {
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders }).pipe(
      tap((response: any) => {
        if (response && response.access_token) {
          localStorage.setItem('accessToken', response.access_token);
        }
      }),
      switchMap(() => this.profile()),
      tap(() => {
        location.reload();
      }),
      catchError((error) => {
        this.alert.showNotification({icon: 'error', message: 'Sus credenciales son incorrectas'});
        return throwError(error);
      })
    );
  }

  public profile() {
    return this.http.get(
      'https://api.escuelajs.co/api/v1/auth/profile',
      {
        headers: new HttpHeaders({
          'Content-Type':'application/json',
          'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
        })
      }
    ).pipe(
      tap((response) => localStorage.setItem('user', JSON.stringify(response)))
    );
  }

  logout() {
    Storage.clear();
    location.reload();
  }
}
