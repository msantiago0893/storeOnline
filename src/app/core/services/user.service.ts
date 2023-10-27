import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@model/user.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertSwalService } from './alert-swal.service';
import { Router } from '@angular/router';
import { ROUTER } from '@constants/routers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri: string = 'https://api.escuelajs.co/api/v1/users';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(
    private http: HttpClient,
    private alert: AlertSwalService,
    private route: Router
  ) { }

  public getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.uri, { headers: this.httpHeaders });
  }

  public getById(id: number): Observable<User> {
    return this.http.get<User>(`${this.uri}/${id}`);
  }

  public add(item: Object) {
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders })
    .pipe(
      tap(() => {
        this.alert.showNotification({
          message: 'Se ha registrado el usuario'
        });

        this.route.navigateByUrl(`/manager/${ROUTER.USERS}`);
      })
    );
  }

  public changePassword(user: any) {
    return this.update(user)
      .pipe(
        tap(() => {
          this.alert.showNotification({
            message: 'Se ha cambiado su contraseña con éxito'
          });
        })
      );
  }

  public updateUser(user: any) {
    return this.update(user)
      .pipe(
        tap(() => {
          this.alert.showNotification({
            message: 'Se ha actualizado con éxito el usuario'
          });
          this.route.navigateByUrl(`/manager/${ROUTER.USERS}`);
        })
      );
  }

  public update(user: any) {
    const { id, ...item } = user;
    return this.http.put(`${this.uri}/${id}`, item, { headers: this.httpHeaders });
  }

  public delete(id: number) {
    return this.http.delete(`${this.uri}/${id}`, { headers: this.httpHeaders })
    .pipe(
      tap(() => {
        this.alert.showNotification({
          message: 'Usuario removida con éxito'
        });
      })
    );
  }
}
