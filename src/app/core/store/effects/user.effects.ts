import { Injectable } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap } from "rxjs/operators";
import { EMPTY } from "rxjs";

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}

  loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType('[User list] Load items'),
    mergeMap(
      () => this.userService.getAll()
        .pipe(
          map(items => ({ type: '[User list] Loaded success', users: items })),
          catchError(() => EMPTY)
        )
    )
  ));

}

