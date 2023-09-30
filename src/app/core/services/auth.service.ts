import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uri: string = 'https://api.escuelajs.co/api/v1/auth/login';

  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  constructor(
    private http: HttpClient
  ) { }

  // public login(item: Object) {
  //   console.log('service login');
  //   console.log(item);
  //   return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders }).pipe(
  //     tap((response: any) => {
  //       if (response && response.access_token) {
  //         localStorage.setItem('accessToken', response.access_token);
  //       }
  //     })
  //   );
  // }

  public login(item: Object) {
    console.log('service login');
    console.log(item);
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders }).pipe(
      tap((response: any) => {
        if (response && response.access_token) {
          localStorage.setItem('accessToken', response.access_token);
        }
      }),
      switchMap(() => this.profile())
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
}
