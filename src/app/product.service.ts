import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';
import { Products, ProductCreacion } from './product.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Inyectamos HttpClient de manera correcta
  private readonly http = inject(HttpClient);
  private readonly URLbase = `${environment.apiURL}/api/Products`;

  constructor() { }

  // Obtener todos los productos
  public obtenerTodos(): Observable<Products[]> {
    return this.http.get<Products[]>(this.URLbase);
  }

  // Obtener un producto por ID
  public obtenerPorId(ProductID: number): Observable<Products> {
    return this.http.get<Products>(`${this.URLbase}/${ProductID}`);
  }

  // Crear un nuevo producto
  public crear(product: ProductCreacion): Observable<Products> {
    return this.http.post<Products>(this.URLbase, product);
  }


  // Eliminar un producto
  public borrar(ProductID: number): Observable<void> {
    return this.http.delete<void>(`${this.URLbase}/${ProductID}`);
  }
}
