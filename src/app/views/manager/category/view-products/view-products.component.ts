import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadProductsByCategory } from 'src/app/core/store/actions/category.action';
import { selectCategory, selectProductByCategory } from 'src/app/core/store/selectors/category.selector';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.sass']
})
export class ViewProductsComponent implements OnInit {
  idCategory: any;
  categorias$ = this.store.select(selectCategory);
  products: Array<any> = [];
  displayedColumns: string[] = ['name', 'price', 'description', 'creationAt'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.idCategory = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getProducts() {
    this.store.dispatch(loadProductsByCategory({id: this.idCategory}));

    this.store.select(selectProductByCategory)
      .subscribe((response: any) => {
        this.dataSource.data = response;
      });
  }

}
