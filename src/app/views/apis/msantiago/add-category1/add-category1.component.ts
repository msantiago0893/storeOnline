import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category1Service } from 'src/app/core/services/category1.service';

@Component({
  selector: 'app-add-category1',
  templateUrl: './add-category1.component.html',
  styleUrls: ['./add-category1.component.sass']
})
export class AddCategory1Component implements OnInit {
  // Definición del formulario
  myForm: FormGroup = new FormGroup({});

  // Variable para almacenar el ID de la categoría
  id: any;

  constructor(
    private fb: FormBuilder, // Inyecta el FormBuilder para crear el formulario
    private _service: Category1Service, // Inyecta el servicio para interactuar con la categoría
    private route: ActivatedRoute // Inyecta el servicio para obtener el parámetro 'id' de la URL
  ) {
    this.validators();  // Se  llama el metodo validators(), y se inicializa las validaciones del formulario

    // Obtiene el valor del parámetro 'id' de la URL
    this.id = route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // Llama al método para obtener la categoría con el ID proporcionado
    this.getCategory();
  }

  // Getter para acceder más fácilmente a los controles del formulario
  get input(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }

  // Obtiene la categoría con el ID especificado y actualiza el formulario con sus valores
  getCategory() {
    this._service.getById(this.id)
      .subscribe(item => {
        this.myForm.patchValue(item); // Actualiza los valores del formulario con los datos de la categoría
      });
  }

  // Guarda la categoría utilizando el servicio
  save() {
    this._service.add(this.myForm.value)
      .subscribe(item => {
        console.log(item); // Muestra el resultado de la operación en la consola
      });
  }

  // Actualiza la categoría utilizando el servicio
  update() {
    this._service.update(this.id, this.myForm.value)
    .subscribe(item => {
      console.log(item); // Muestra el resultado de la operación en la consola
    });
  }

  // Configura los validadores para los campos del formulario
  validators() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required, // Campo obligatorio
        Validators.maxLength(50), // Longitud máxima de 50 caracteres
        Validators.pattern('^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$')
      ]],
      image: ['', [
        Validators.required, // Campo obligatorio
        // Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?') // Patrón de validación personalizado (comentado)
      ]]
    });
  }

}
