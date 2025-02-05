import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../product.models';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-indice-productos',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatTableModule],
  templateUrl: './indice-productos.component.html',
  styleUrl: './indice-productos.component.css'
})
export class IndiceProductosComponent {
  ProductService = inject(ProductService);
  
  // Inicializa Products como un arreglo vacío
  Products: Products[] = [];
  
  columnasAMostrar = ['Nombre', 'Precio', 'Acciones'];

  constructor() {
    this.cargarProductos();
  }

  cargarProductos() {
    this.ProductService.obtenerTodos().subscribe((productos) => {
      this.Products = productos; // Asigna los productos al arreglo
    });
  }

  borrar(ProductID: number) {
    this.ProductService.borrar(ProductID).subscribe(() => {
      this.cargarProductos(); // Recarga los productos después de borrar
    });
  }
}
