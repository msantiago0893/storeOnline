import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { deleteCategory, loadCategories } from 'src/app/core/store/actions/category.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selector';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
})
export class CategoriesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'creationAt', 'operation'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  search:string = '';

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

    this.store.select(selectCategories)
      .subscribe((categories: any) => {
        this.dataSource.data = categories;
      });
  }

  deleteCategory(id: number) {
    this.store.dispatch(deleteCategory({id}));
  }
}
