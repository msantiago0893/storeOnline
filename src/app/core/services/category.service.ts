import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/category.model';
import { AlertSwalService } from './alert-swal.service';
import { Router } from '@angular/router';
import { ProductsByCategory } from '@model/products-by-category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private uri: string = 'https://api.escuelajs.co/api/v1/categories';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(
    private http: HttpClient,
    private alert: AlertSwalService,
    private route: Router
  ) { }

  public getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.uri);
  }

  public getById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.uri}/${id}`);
  }

  public add(item: Object) {
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders })
      .pipe(
        tap(() => {
          this.alert.showNotification({
            message: 'Se ha registrado la categoria'
          });

          this.route.navigateByUrl('/manager/categories');
        })
      );
  }

  public update(category: any) {
    const { id, ...item } = category;

    return this.http.put(`${this.uri}/${id}`, item, { headers: this.httpHeaders })
      .pipe(
        tap(() => {
          this.alert.showNotification({
            message: 'Se ha actualizado con éxito la categoria'
          });
          this.route.navigateByUrl('/manager/categories');
        })
      );
  }

  public delete(id: number) {
    return this.http.delete(`${this.uri}/${id}`, { headers: this.httpHeaders })
    .pipe(
      tap(() => {
        this.alert.showNotification({
          message: 'Categoria removida con éxito'
        });
      })
    );
  }

  public getProductsByCategory(id:number): Observable<ProductsByCategory[]> {
    return this.http.get<ProductsByCategory[]>(`${this.uri}/${id}/products`);
  }
}
