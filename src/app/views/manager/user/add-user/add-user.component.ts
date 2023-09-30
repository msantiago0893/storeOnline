import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from '@model/user.model';
import { Store } from '@ngrx/store';
import { addUser, loadUser, updateUser } from 'src/app/core/store/actions/user.action';
import { selectUser } from 'src/app/core/store/selectors/users.selector';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  idUser: any;

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.validators();

    this.idUser = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.idUser) {
      this.getUser();
    }
  }

  getUser() {
    this.store.dispatch(loadUser({id: this.idUser}));

    this.store.select(selectUser)
      .subscribe((user: User) => {
        this.myForm.patchValue(user);
      });
  }

  save() {
    this.store.dispatch(addUser({
      user: this.myForm.value
    }));
  }

  update() {
    this.store.dispatch(updateUser({
      user: { id: this.idUser, ...this.myForm.value}
    }));
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      role: ['', [
        Validators.required
      ]],
      avatar: ['', [
        Validators.required
      ]]
    });
  }

}
