import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.sass']
})
export class ChangePasswordComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  hide = true;

  constructor(private fb: FormBuilder) {
    this.validators();
  }

  ngOnInit(): void {
  }

  validators() {
    this.myForm = this.fb.group({
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]],
      confirmPassword: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ]]
    });
  }



}
