import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { deleteCategory, loadCategories } from 'src/app/core/store/actions/category.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selector';
import { fadeAnimation, slideInOutAnimation } from 'src/app/shared/animations/animation';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
  animations: [
    fadeAnimation,
    slideInOutAnimation
  ]
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'creationAt', 'operation'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  categorias$ = this.store.select(selectCategories);

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  getCategories() {
    this.store.dispatch(loadCategories());

    this.categorias$
      .subscribe((categorias: any) => {
        this.dataSource.data = categorias;
      });
  }

  deleteCategory(id: number) {
    this.store.dispatch(deleteCategory({id}));
  }
}
