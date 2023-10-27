import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { loadProduct } from 'src/app/core/store/actions/product.action';
import { selectProduct } from 'src/app/core/store/selectors/products.selector';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.sass'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translatex(-100%)', opacity: 0 }),
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ]
})
export class DetailProductComponent implements OnInit {
  idProduct: number;
  product$ = this.store.pipe(select(selectProduct));

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.idProduct = route.snapshot.params['id'];
  }

  ngOnInit(): void {

    if (this.idProduct) {
      this.getProduct();
    }
  }

  getProduct() {
    this.store.dispatch(loadProduct({ id: this.idProduct }));
  }
}
