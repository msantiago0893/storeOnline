import { Component, OnInit } from '@angular/core';
import { Storage } from '@memento/Storage';
import { Store, select } from '@ngrx/store';
import { loadUser } from 'src/app/core/store/actions/user.action';
import { selectUser } from 'src/app/core/store/selectors/users.selector';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {
  account: any;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getAccount();
  }

  getAccount() {
    this.store.dispatch(
      loadUser({ id: Storage.getItem('user') && Storage.getItem('user').id })
    );

    this.store.select(selectUser)
      .subscribe((user: any) => {
        this.account = user;
      });
  }

}
