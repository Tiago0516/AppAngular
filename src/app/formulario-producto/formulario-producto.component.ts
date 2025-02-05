import { Products, ProductCreacion } from '../product.models';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-formulario-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './formulario-producto.component.html',
  styleUrl: './formulario-producto.component.css'
})
export class FormularioProductoComponent implements OnInit {
 
  private readonly formBuilder = inject(FormBuilder);

  @Input({required: true})
  titulo!: string;

  @Input()
  modelo?: Products

  @Output()
  posteoFormulario = new EventEmitter<ProductCreacion>();

  ngOnInit(): void {
    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  form = this.formBuilder.group({
    productName: [''],
    price:[0]
  })

  guardarCambios() {
    let product = this.form.value as ProductCreacion;
    this.posteoFormulario.emit(product);
  }
}
