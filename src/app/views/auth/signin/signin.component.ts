import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from 'src/app/core/store/actions/auth.action';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  hide: boolean = true;

  loading$: Observable<boolean> = new Observable();
  users$: Observable<any> = new Observable();


  constructor (
    private store: Store<any>,
    private fb: FormBuilder
  ) {
    this.validators();
  }

  ngOnInit(): void { }

  access() {
    this.store.dispatch(login(this.myForm.value));
  }

  get input(): {[key: string]: AbstractControl} {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      email:['john@mail.com', [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
      password:['changeme', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        // Validators.pattern('^(?=.[a-zA-Z])(?=.[0-9])[a-zA-Z0-9]+$'),
      ]]
    });
  }

}