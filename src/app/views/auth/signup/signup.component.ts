import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  hide = true;

  myForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    this.validators();
  }

  ngOnInit(): void {
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  save() {
    console.log("Se ha guardado");
    console.log(this.myForm.value);
  }

  validators() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      firstName: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      secondtName: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      gender: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.maxLength(50),
        Validators.minLength(8)
      ]],
      calendar: ['', [
        Validators.required
      ]],
      telephone: ['', [
        Validators.required,
        Validators.pattern("^[0-9]+$"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      cellPhone: ['', [
        Validators.required,
        Validators.pattern("^[0-9]+$"),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      country: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      state: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      city: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      municipality: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      cologne: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
      postalCode: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]*'),
        Validators.maxLength(10)
      ]],
      street: ['', [
        Validators.required,
        Validators.pattern('[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*'),
        Validators.maxLength(100)
      ]],
    });
  }

}
