import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category1 } from 'src/app/views/apis/Models/Category1';

// Clase que define el servicio para realizar solicitudes HTTP
@Injectable({
  providedIn: 'root'
})
export class Category1Service {

  // URL del recurso que se necesitará para consumir los recursos (GET, POST, PUT, DELETE)
  private uri: string = 'https://api.escuelajs.co/api/v1/categories';

  // Header o cabecera que se necesitará para realizar el consumo de un recurso POST
  private httpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

  // Constructor de la clase que inyecta el servicio HttpClient para consumir servicios HTTP
  constructor(
    private http: HttpClient
  ) { }

  // Metodo para consultar todas las categorias
  // Función que devuelve un Observable que emite un arreglo de objetos de tipo Category1
  public getAll(): Observable<Category1[]> {
    // Retorna el resultado de realizar una solicitud HTTP GET a la URL this.uri
    // Se espera recibir un arreglo de objetos de tipo Category1 como respuesta
    return this.http.get<Category1[]>(this.uri);  // LLamo la dependencia http, para realizar una solicitud HTTP GET, dentro de <> indoco lo que quiero retornar como respuesta, y dentro de los corchetes ("aqui inidico la url del recurso que quiero consumir")
  }

  // La función getById acepta un parámetro "id" de tipo number.
  public getById(id: number): Observable<Category1> {
    // Utiliza el servicio "http" de Angular para hacer una solicitud HTTP GET a una URL compuesta
    // por el valor de "this.uri" (una URL base) y el valor del parámetro "id".
    // La respuesta se espera que sea de tipo "Category1" y se espera que la respuesta esté representada
    // como un objeto "Observable" que puede ser "suscripto" para obtener los datos o manejar errores.
    return this.http.get<Category1>(`${this.uri}/${id}`);
  }

  // La función add toma un parámetro 'item' que se espera que sea un objeto (de tipo Object).
  public add(item: Object) {
    // Utiliza el cliente HTTP para realizar una solicitud POST a la URI especificada.
    // Se utiliza la interpolación de cadenas con la plantilla `${this.uri}` para formar la URL.
    // 'item' es el cuerpo de la solicitud, que se enviará en el cuerpo del mensaje.
    // Se proporciona el objeto 'this.httpHeaders' como cabeceras en la solicitud.
    return this.http.post(`${this.uri}`, item, { headers: this.httpHeaders });
  }

  // Parámetros:
  // - id: El identificador del elemento que se desea actualizar.
  // - item: Un objeto que contiene los datos actualizados que se enviarán al servidor.
public update(id: number, item: any) {
  // Utiliza el método HTTP PUT para enviar una solicitud de actualización al servidor.
  // - El primer argumento `${this.uri}/${id}` es la URL completa que identifica el recurso a actualizar, incluyendo el ID.
  // - El segundo argumento "item" es el objeto con los datos actualizados que se enviará en el cuerpo de la solicitud.
  // - El tercer argumento "{headers: this.httpHeaders}" son las cabeceras de la solicitud, que pueden incluir información adicional como autorización, tipo de contenido, etc.

  return this.http.put(`${this.uri}/${id}`, item, { headers: this.httpHeaders });
  // La función devuelve el resultado de la solicitud HTTP PUT realizada por el método "http.put()".
}


  // Definición de la función "delete" que recibe un parámetro "id" de tipo number
public delete(id: number) {
  // Se utiliza el método "delete" de la instancia "http" para realizar una solicitud DELETE
  // El template literal `${this.uri}/${id}` se utiliza para construir la URL de la solicitud
  // El parámetro "id" se interpola en la URL
  // Se pasa un objeto con las opciones de la solicitud, que incluye los "headers" definidos en "httpHeaders"
  return this.http.delete(`${this.uri}/${id}`, { headers: this.httpHeaders });
}
}
