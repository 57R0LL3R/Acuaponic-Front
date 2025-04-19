import { Component } from '@angular/core';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrl: './auditoria.component.css'
})
export class AuditoriaComponent {
  auditorias = [
    {
      usuario: 'admin1',
      accion: 'INSERT',
      tabla: 'Usuarios',
      fecha: '2025-04-17',
      detalles: 'Se creó un nuevo usuario con ID 103'
    },
    {
      usuario: 'admin2',
      accion: 'UPDATE',
      tabla: 'Configuraciones',
      fecha: '2025-04-16',
      detalles: 'Se actualizó el valor de temperatura mínima'
    },
    {
      usuario: 'admin1',
      accion: 'DELETE',
      tabla: 'Alertas',
      fecha: '2025-04-15',
      detalles: 'Se eliminó la alerta ID 12 por mantenimiento'
    }
  ];
}
