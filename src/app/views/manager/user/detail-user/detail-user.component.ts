import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { loadUser } from 'src/app/core/store/actions/user.action';
import { selectUser } from 'src/app/core/store/selectors/users.selector';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.sass'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translatex(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ]
})
export class DetailUserComponent implements OnInit {
  idUser: number;
  user$ = this.store.pipe(select(selectUser));

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.idUser = route.snapshot.params['id'];
  }

  ngOnInit(): void {

    if (this.idUser) {
      this.getUser();
    }
  }

  getUser() {
    this.store.dispatch(loadUser({ id: this.idUser }));
  }
}
