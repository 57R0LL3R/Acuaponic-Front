import { Component } from '@angular/core';
import { GestionDispositivo } from '../../Models/GestionDispositivo';

@Component({
  selector: 'app-gestion-dispositivos',
  templateUrl: './gestion-dispositivos.component.html',
  styleUrl: './gestion-dispositivos.component.css'
})
export class GestionDispositivosComponent {
  displayedColumns: string[] = ['nombre', 'upa', 'acciones'];

  listaDispositivos: GestionDispositivo[] = [
    { nombre: 'Sensor de pH', upa: 'UPA-001', tipoDispositivo: 'Sensor', marca: 'AquaTech', numeroSerial: 'PH123456', descripcion: 'Sensor de pH para monitoreo' },
    { nombre: 'Bomba de Agua', upa: 'UPA-002', tipoDispositivo: 'Bomba', marca: 'WaterFlow', numeroSerial: 'WAT7890', descripcion: 'Bomba de recirculación' },
    { nombre: 'Controlador de Temperatura', upa: 'UPA-003', tipoDispositivo: 'Controlador', marca: 'ThermoSense', numeroSerial: 'TEMP5678', descripcion: 'Controlador de temperatura con ajuste automático' },
    { nombre: 'Medidor de Conductividad', upa: 'UPA-004', tipoDispositivo: 'Sensor', marca: 'ECMeter', numeroSerial: 'COND2345', descripcion: 'Medidor de conductividad eléctrica' }
  ];

  dispositivoSeleccionado: GestionDispositivo | null = null;

  mostrarDetalles(dispositivo: GestionDispositivo) {
    this.dispositivoSeleccionado = dispositivo;
  }

  cerrarDetalles() {
    this.dispositivoSeleccionado = null;
  }

}
