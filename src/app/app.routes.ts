import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { IndiceProductosComponent } from './indice-productos/indice-productos.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'productos', component: IndiceProductosComponent},
    {path: 'productos/crear', component: CrearProductoComponent},
    {path: 'productos/buscar', component: BuscarProductoComponent } 
];
