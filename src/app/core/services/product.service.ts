import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@model/user.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertSwalService } from './alert-swal.service';
import { Router } from '@angular/router';
import { Product } from '@model/product.model';
import { ROUTER } from '@constants/routers';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private uri: string = 'https://api.escuelajs.co/api/v1/products';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(
    private http: HttpClient,
    private alert: AlertSwalService,
    private route: Router
  ) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.uri, { headers: this.httpHeaders });
  }

  public getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.uri}/${id}`);
  }

  public add(item: Object) {
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders })
    .pipe(
      tap(() => {
        this.alert.showNotification({
          message: 'Se ha registrado el producto'
        });

        this.route.navigateByUrl(`/manager/${ROUTER.PRODUCTS}`);
      })
    );
  }

  public update(product: any) {
    const { id, ...item } = product;
    return this.http.put(`${this.uri}/${id}`, item, { headers: this.httpHeaders })
      .pipe(
        tap(() => {
          this.alert.showNotification({
            message: 'Se ha actualizado con éxito el producto'
          });
          this.route.navigateByUrl(`/manager/${ROUTER.PRODUCTS}`);
        })
      );
  }

  public delete(id: number) {
    return this.http.delete(`${this.uri}/${id}`, { headers: this.httpHeaders })
    .pipe(
      tap(() => {
        this.alert.showNotification({
          message: 'Producto removida con éxito'
        });
      })
    );
  }
}
