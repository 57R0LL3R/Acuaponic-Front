import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  eventos = [
    {
      nombreElemento: 'Bomba',
      ubicacion: 'Tanque 1',
      nombreAtributo: 'Temperatura',
      tipoEvento: 'Alerta',
      impacto: 'Medio',
      cantidad: 2,
      medida: '°C',
      comentario: 'Sensor fallando',
      fecha: '2025-04-15'
    },
    {
      nombreElemento: 'Sensor pH',
      ubicacion: 'Tanque 2',
      nombreAtributo: 'pH',
      tipoEvento: 'Advertencia',
      impacto: 'Alto',
      cantidad: 1,
      medida: 'pH',
      comentario: 'Nivel fuera del rango óptimo',
      fecha: '2025-04-16'
    },
    {
      nombreElemento: 'Luz LED',
      ubicacion: 'Invernadero',
      nombreAtributo: 'Estado',
      tipoEvento: 'Mantenimiento',
      impacto: 'Bajo',
      cantidad: 1,
      medida: 'Unidad',
      comentario: 'Revisión programada',
      fecha: '2025-04-17'
    }
  ];
}
