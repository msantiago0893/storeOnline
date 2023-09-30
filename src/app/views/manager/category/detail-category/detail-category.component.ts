import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { loadCategory } from 'src/app/core/store/actions/category.action';
import { selectCategory } from 'src/app/core/store/selectors/category.selector';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.sass'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ transform: 'translatex(-100%)', opacity: 0 }), // Estado inicial: fuera de la vista
        animate('0.5s ease-out', style({ transform: 'translateY(0)', opacity: 1 })), // Desliza hacia arriba y se vuelve visible
      ]),
    ]),
  ]
})
export class DetailCategoryComponent implements OnInit {

  idCategory: number;
  category$ = this.store.pipe(select(selectCategory));

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute
  ) {
    this.idCategory = route.snapshot.params['id'];
  }

  ngOnInit(): void {

    if (this.idCategory) {
      this.getCategory();
    }
  }

  getCategory() {
    this.store.dispatch(loadCategory({id: this.idCategory}));
  }
}
