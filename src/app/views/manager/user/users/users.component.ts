import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { deleteUser, loadUsers } from 'src/app/core/store/actions/user.action';
import { selectUsers } from 'src/app/core/store/selectors/users.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'operation'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  search:string = '';

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter() {
    const filterValue = this.search.toLowerCase();
    this.dataSource.filter = filterValue;
    this.dataSource.paginator?.firstPage();
  }

  getUsers() {
    this.store.dispatch(loadUsers());

    this.store.select(selectUsers)
      .subscribe((users: any) => {
        this.dataSource.data = users;
      });
  }

  delete(id: number) {
    this.store.dispatch(deleteUser({id}));
  }
}
