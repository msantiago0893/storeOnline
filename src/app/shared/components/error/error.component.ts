import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setError } from 'src/app/core/store/actions/app.action';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent {
  @Input() msgError: String = "" || "Ha surgido un error al realizar su solicitud";

  constructor(
    private store: Store<any>
  ) { }

  onBack() {
    this.store.dispatch(setError({isError: false}));
  }
}
