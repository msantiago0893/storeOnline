import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { deleteProduct, loadProducts } from 'src/app/core/store/actions/product.action';
import { selectProducts } from 'src/app/core/store/selectors/products.selector';
import { fadeAnimation } from 'src/app/shared/animations/animation';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass'],
  animations: [
    fadeAnimation
  ]
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'price', 'category', 'operation'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  search: string = '';

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProducts() {
    this.store.dispatch(loadProducts());

    this.store.select(selectProducts)
      .subscribe((products: any) => {
        this.dataSource.data = products;
      });
  }

  delete(id: number) {
    this.store.dispatch(deleteProduct({id}));
  }
}
