import { Component } from '@angular/core';
import { Elemento } from '../../Models/Elemento';

@Component({
  selector: 'app-gestion-elementos',
  templateUrl: './gestion-elementos.component.html',
  styleUrl: './gestion-elementos.component.css'
})
export class GestionElementosComponent {
  displayedColumns: string[] = ['nombreElemento', 'upa', 'acciones'];

  listaElementos: Elemento[] = [
    { nombreElemento: 'Nutriente A', tipoElemento: 'Fertilizante', upa: 'UPA-001', cantidad: 50, tipoMedida: 'kg' },
    { nombreElemento: 'Agua Tratada', tipoElemento: 'Recurso', upa: 'UPA-002', cantidad: 1000, tipoMedida: 'L' },
    { nombreElemento: 'Peces Tilapia', tipoElemento: 'Animal', upa: 'UPA-003', cantidad: 200, tipoMedida: 'unidades' },
    { nombreElemento: 'Plantas Lechuga', tipoElemento: 'Vegetal', upa: 'UPA-004', cantidad: 300, tipoMedida: 'unidades' }
  ];

  elementoSeleccionado: Elemento | null = null;

  mostrarDetalles(elemento: Elemento) {
    this.elementoSeleccionado = elemento;
  }

  cerrarDetalles() {
    this.elementoSeleccionado = null;
  }

}
