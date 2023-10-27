import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@model/category.model';
import { Product } from '@model/product.model';
import { Store } from '@ngrx/store';
import { loadCategories } from 'src/app/core/store/actions/category.action';
import { addProduct, loadProduct } from 'src/app/core/store/actions/product.action';
import { selectCategories } from 'src/app/core/store/selectors/category.selector';
import { selectProduct, selectProducts } from 'src/app/core/store/selectors/products.selector';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {
  myForm: FormGroup = new FormGroup({});
  idProduct: any;
  categories: Array<Category> = [];

  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.validators();

    this.idProduct = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getCategories();

    if (this.idProduct) {
      this.getProduct();
    }
  }

  getProduct() {
    this.store.dispatch(loadProduct({ id: this.idProduct }));

    this.store.select(selectProduct)
      .subscribe((product: Product) => {
        this.myForm.patchValue({
          categoryId: product.category.id,
          ...product
        });
      });
  }

  getCategories() {
    this.store.dispatch(loadCategories());

    this.store.select(selectCategories)
      .subscribe((categories: any) => {
        this.categories = categories;
      });
  }

  save() {
    const { title, price, description, categoryId, image } = this.myForm.value;

    const product = {
      title,
      price: Number(price),
      description,
      categoryId: Number(categoryId),
      images: [image]
    }

    if (this.idProduct) {
      this.store.dispatch(addProduct({
        product
      }));
    } else {
      this.store.dispatch(addProduct({
        product: { id: this.idProduct, ...product }
      }));
    }
  }

  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  validators() {
    this.myForm = this.fb.group({
      title: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      price: ['', [
        Validators.required
      ]],
      description: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      categoryId: ['', [
        Validators.required
      ]],
      image: ['', [
        Validators.required
      ]]
    });
  }
}
