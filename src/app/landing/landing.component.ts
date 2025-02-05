import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';  // Importa CommonModule para poder usar *ngFor

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de agregar CommonModule aquí
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  ProductService = inject(ProductService);
  Products: any[] = [];

  constructor() {
    this.ProductService.obtenerTodos().subscribe(datos => {
      this.Products = datos;
      console.log(this.Products);
    });
  }
}
