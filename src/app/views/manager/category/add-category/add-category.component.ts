import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CategoryService } from 'src/app/core/services/category.service';
import { addCategory, updateCategory } from 'src/app/core/store/actions/category.action';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.sass']
})
export class AddCategoryComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});
  id: any;

  constructor(
    private fb: FormBuilder,
    private _service: CategoryService,
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.validators();

    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {

    if (this.id) {
      this.getCategory();
    }
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  getCategory() {
    this._service.getById(this.id)
      .subscribe((item: any) => {
        this.myForm.patchValue(item);
      });
  }

  save() {
    this.store.dispatch(addCategory({
      category: this.myForm.value
    }));
  }

  update() {
    this.store.dispatch(updateCategory({
      category: { id: this.id, ...this.myForm.value}
    }));
  }

  validators() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern('^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')
      ]],
      image: ['', [
        Validators.required
      ]]
    });
  }

}
