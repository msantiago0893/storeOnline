import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthService } from '@services/auth.service';
import { selectCartTotalItems } from 'src/app/core/store/selectors/cart.selector';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {
  totalItems$ = this.store.pipe(select(selectCartTotalItems));

  constructor(
    private store: Store<any>,
    private session: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.session.logout();
  }

}
