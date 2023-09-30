import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private uri: string = 'https://api.escuelajs.co/api/v1/users';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json', // El tipo de contenido que esperas recibir
    'Access-Control-Allow-Origin': '*'
  });

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.uri, { headers: this.httpHeaders });
  }

  public getById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.uri}/${id}`);
  }

  public add(item: Object) {
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders });
  }

  public update(id: number, item: any) {
    return this.http.put(`${this.uri}/${id}`, item, { headers: this.httpHeaders });
  }

  public delete(id: number) {
    return this.http.delete(`${this.uri}/${id}`, { headers: this.httpHeaders });
  }
}
