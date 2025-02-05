import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductCreacion } from '../product.models';
import { FormularioProductoComponent } from "../formulario-producto/formulario-producto.component";

@Component({
  selector: 'app-crear-producto',
  standalone: true,
  imports: [FormularioProductoComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {
  router = inject(Router);
  ProductService = inject(ProductService);
  

  guardarCambios(Products: ProductCreacion) {
    this.ProductService.crear(Products).subscribe(() => {
      this.router.navigate(["productos"]);
    });
  }
}
