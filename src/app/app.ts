import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductoCard } from './producto-card/producto-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    ProductoCard
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  titulo = 'Mi Lista de Productos';
  fechaActual = new Date();
  productos = ['Laptop', 'Teclado Mecánico', 'Mouse Gamer', 'Monitor 4K'];
  mostrarLista = true;
  nuevoProducto = '';

  toggleLista(): void {
    this.mostrarLista = !this.mostrarLista;
  }

  agregarProducto(): void {
    if (this.nuevoProducto.trim() !== '') {
      this.productos.push(this.nuevoProducto);
      this.nuevoProducto = '';
    }
  }
}