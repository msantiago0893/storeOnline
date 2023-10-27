import { Component, OnInit } from '@angular/core';
import { Product } from '@model/product.model';
import { Store } from '@ngrx/store';
import { addToCart } from 'src/app/core/store/actions/cart.action';
import { loadProducts } from 'src/app/core/store/actions/product.action';
import { selectProducts } from 'src/app/core/store/selectors/products.selector';
import { fadeAnimation } from 'src/app/shared/animations/animation';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
  animations: [
    fadeAnimation
  ]
})
export class GalleryComponent implements OnInit {
  products: Array<Product> = [];
  search: string = '';

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.store.dispatch(loadProducts());

    this.store.select(selectProducts)
      .subscribe((response: any) => {
        this.products = response;
      });
  }

  addCart(product: any) {
    this.store.dispatch(addToCart({ product }));
  }

}
