import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  constructor( private fb: FormBuilder ) {
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
      password:['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]]
    });
  }

}
