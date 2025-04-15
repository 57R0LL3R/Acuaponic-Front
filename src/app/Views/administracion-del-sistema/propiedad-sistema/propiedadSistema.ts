import { Component } from '@angular/core';
import { PropiedadSistema } from '../../../Models/PropiedadSistema';

@Component({
  selector: 'app-propiedad-sistema',
  templateUrl: './propiedad-sistema.component.html',
  styleUrl: './propiedad-sistema.component.css'
})
export class PropiedadSistemaComponent {

  displayedColumns: string[] = ['nombreAtributo', 'upa', 'valor', 'tipoMedida', 'medioProduccion', 'acciones'];

  listaPropiedades: PropiedadSistema[] = [
    { nombreAtributo: 'Temperatura', upa: 'UPA-001', valor: 25, tipoMedida: '°C', medioProduccion: 'Sistema Hidropónico' },
    { nombreAtributo: 'Humedad', upa: 'UPA-002', valor: 60, tipoMedida: '%', medioProduccion: 'Cultivo en tierra' },
    { nombreAtributo: 'pH', upa: 'UPA-003', valor: 6.5, tipoMedida: 'pH', medioProduccion: 'Acuapónico' },
    { nombreAtributo: 'Oxígeno Disuelto', upa: 'UPA-004', valor: 7, tipoMedida: 'mg/L', medioProduccion: 'Tanques de Recirculación' }
  ];

  editarElemento(elemento: PropiedadSistema) {
    console.log('Editar:', elemento);
  }

  eliminarElemento(elemento: PropiedadSistema) {
    this.listaPropiedades = this.listaPropiedades.filter(e => e !== elemento);
  }
}
