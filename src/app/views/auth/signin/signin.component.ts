import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  hide: boolean = true;

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
        Validators.minLength(5),
        Validators.maxLength(50)

      ]],
      password:['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12),
        Validators.pattern('^(?=.[a-zA-Z])(?=.[0-9])[a-zA-Z0-9]+$')
      ]]
    });
  }

}
