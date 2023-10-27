import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@memento/Storage';
import { Store } from '@ngrx/store';
import { changePassword } from 'src/app/core/store/actions/user.action';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
  ) {
    this.validators();
  }

  ngOnInit(): void {
  }

  save() {
    const user = {
      id: Storage.getItem('user') && Storage.getItem('user').id,
      password: this.myForm.value.password
    }
    this.store.dispatch(changePassword({user}));
  }

  get input() {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      password: ['santiago', [
        Validators.required,
      ]],
      confirmPassword: ['santiago', [
        Validators.required,
        this.passwordMatch.bind(this)
      ]]
    });
  }

  passwordMatch(control: AbstractControl) {
    const password = this.myForm.get('password')?.value;
    return password === control.value ? null : { passwordMismatch: true };
  }
}
