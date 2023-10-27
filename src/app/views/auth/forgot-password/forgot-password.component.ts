import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.sass']
})
export class ForgotPasswordComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) {
    this.validators();
  }

  ngOnInit(): void {
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      email:['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]],
      confirmEmail:['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]]
    });
  }


}
