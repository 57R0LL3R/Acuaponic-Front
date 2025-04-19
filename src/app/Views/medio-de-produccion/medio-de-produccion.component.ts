import { Component } from '@angular/core';
import { MedioProduccion } from '../../Models/MedioProduccion';  // Ajusta el path si es necesario

@Component({
  selector: 'app-medio-de-produccion',
  templateUrl: './medio-de-produccion.component.html',
  styleUrl: './medio-de-produccion.component.css'
})
export class MedioProduccionComponent {
  medios = [
    { nombre: 'Bomba de Agua', tipoElemento: 'Mecánico' },
    { nombre: 'Sensor de pH', tipoElemento: 'Electrónico' },
    { nombre: 'Tanque Principal', tipoElemento: 'Contenedor' }
  ];
  
  nuevoMedio: MedioProduccion = { nombre: '' };

  registrarMedio() {
    if (this.nuevoMedio.nombre.trim()) {
      this.medios.push({
        ...this.nuevoMedio,
        tipoElemento: ''
      });
      this.nuevoMedio.nombre = '';
    }
  }
}