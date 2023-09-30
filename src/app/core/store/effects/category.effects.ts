import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, concatMap, map, switchMap } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { CategoryService } from "../../services/category.service";
import { addCategory, loadCategory, updateCategory } from "../actions/category.action";

@Injectable()
export class CategoryEffects {

  constructor(
    private actions$: Actions,
    private _service: CategoryService
  ) {}

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType('[Category list] Load Categories'),
    switchMap(
      () => this._service.getAll()
        .pipe(
          map(categories => ({ type: '[Category list] Loaded success', categories })),
          catchError(() => EMPTY)
        )
    )
  ));

  loadCategory$ = createEffect(() => this.actions$.pipe(
    ofType(loadCategory),
    switchMap(
      (action) => this._service.getById(action.id)
        .pipe(
          map(category => ({ type: '[Category] Loaded success', category })),
          catchError(() => EMPTY)
        )
    )
  ));

  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCategory), // Escucha la acción 'addCategory'
      switchMap((action) =>
        this._service.add(action.category)
      )
    ),
    { dispatch: false } // No se necesitan despachar acciones en este efecto
  );

  updateCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCategory), // Escucha la acción 'addCategory'
      switchMap((action) =>
        this._service.update(action.category)
      )
    ),
    { dispatch: false } // No se necesitan despachar acciones en este efecto
  );

  deleteCategory$ = createEffect(() => this.actions$.pipe(
    ofType('[Category Remove] Remove Category'),
    switchMap(({ id }) =>
      this._service.delete(id)
        .pipe(
          concatMap(() => [
            { type: '[Category Remove] Remove success' },
            { type: '[Category list] Load Categories' }
          ])
        )
    )
  ));
}
