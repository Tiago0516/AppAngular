import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { Products } from '../product.models';
import { MatTableModule } from '@angular/material/table';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-buscar-producto',
  standalone: true,
  imports: [
    MatButtonModule, 
    RouterLink, 
    MatTableModule, 
    MatFormFieldModule,  
    MatInputModule,      
    ReactiveFormsModule  
  ],
  templateUrl: './buscar-producto.component.html',
  styleUrl: './buscar-producto.component.css'
})
export class BuscarProductoComponent {
  ProductService = inject(ProductService);
  Products: Products[] = [];  // Lista de productos a mostrar
  columnasAMostrar = ['Nombre', 'Precio', 'Acciones'];  // Columnas de la tabla
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // iniciamos el formulario con 'productId' como FormControl
    this.searchForm = this.formBuilder.group({
      productId: new FormControl('')  // Inicializamos el control con valor vacío
    });
  }

  // **Getter para acceder al FormControl en el HTML de manera más limpia**
  get productIdControl(): FormControl {
    return this.searchForm.get('productId') as FormControl;
  }

  // Método para buscar el producto por ID
  buscarProducto() {
    const productId = this.productIdControl.value;  // Usamos el getter en lugar de get()
    
    if (productId && !isNaN(productId)) {
      this.ProductService.obtenerPorId(productId).subscribe((producto) => {
        this.Products = producto ? [producto] : [];  
      });
    } else {
      this.Products = [];
    }
  }

  // Método para borrar un producto
  borrar(ProductID: number) {
    this.ProductService.borrar(ProductID).subscribe(() => {
      this.buscarProducto();
    });
  }
}
