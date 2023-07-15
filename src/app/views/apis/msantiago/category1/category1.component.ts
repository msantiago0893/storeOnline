import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Category1Service } from 'src/app/core/services/category1.service';
import { Category1 } from '../../Models/Category1';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.sass']
})
export class Category1Component implements OnInit {

  // categories es un arreglo de objetos de tipo Category1
  categories: Category1[] = [];

  constructor( // Constructor: sirve para inicializar variables o realizar inyeccion de dependencias
    private _service: Category1Service,   // Inyección de la dependencia "Category1Service" para interactuar con el servicio
    private route: Router // Inyección de la dependencia "Router" para navegar entre rutas
  ) { }

  ngOnInit(): void { // ngOninit es un clico de vida del componente, y nos sirve para realizar bindings
    this.getCategories();  // Llama al método "getCategories" para obtener las categorías al inicializar el componente
  }

  getCategories() {
    this._service.getAll() // Llama al método "getAll" del servicio "Category1Service" para obtener todas las categorías
      .subscribe(items => { // Se suscribe a la respuesta del servicio
        console.log(items); // Imprime las categorías en la consola
        this.categories = items; // Asigna las categorías obtenidas al array "categories" del componente
      });
  }

  goToProductDetails(id: number) {
    this.route.navigate(['api/category1', id]); // Navega a la ruta "api/category1/{id}" al hacer clic en un botón para ver detalles de una categoría
  }

  remove(id: number) {
    this._service.delete(id) // Llama al método "delete" del servicio "Category1Service" para eliminar una categoría por su ID
      .subscribe(
        () => {
          this.getCategories(); // Después de eliminar la categoría, llama al método "getCategories" para actualizar la lista de categorías en el componente
        }
      );
    console.log(id);  // Imprime el ID de la categoría a eliminar en la consola
  }
}
