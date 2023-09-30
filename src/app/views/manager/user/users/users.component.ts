import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { deleteUser, loadUsers } from 'src/app/core/store/actions/user.action';
import { selectUsers } from 'src/app/core/store/selectors/users.selector';
import { fadeAnimation } from 'src/app/shared/animations/animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  animations: [
    fadeAnimation
  ]
})
export class UsersComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'role', 'operation'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

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
