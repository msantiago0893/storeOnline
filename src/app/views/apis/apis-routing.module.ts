import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AddCategory1Component } from './msantiago/add-category1/add-category1.component';
import { Category1Component } from './msantiago/category1/category1.component';

// Definición del array de rutas
const routes: Routes = [
  {
    path: '',
    children: [
      // Ruta para mostrar la categoría 1
      { path: "category1", component: Category1Component },
      // Ruta para agregar una nueva categoría 1
      { path: "add-category1", component: AddCategory1Component },
      // Ruta para editar la categoría 1 con un parámetro 'id'
      { path: 'category1/:id', component: AddCategory1Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ApisRoutingModule { }
