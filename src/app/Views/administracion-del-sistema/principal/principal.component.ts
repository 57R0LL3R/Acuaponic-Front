import { Component } from '@angular/core';
import { AdministracionSistema } from '../../../Models/AdministracionSistema';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  displayedColumns: string[] = ['tipoSistema', 'upa', 'fechaAsignacionEstado', 'acciones'];

  listaEstados: AdministracionSistema[] = [
    { tipoSistema: 'Agua', upa: 'UPA-001', fechaAsignacionEstado: new Date('2024-04-01'),estado:false },
    { tipoSistema: 'Electricidad', upa: 'UPA-002', fechaAsignacionEstado: new Date('2024-03-28') ,estado:true },
    { tipoSistema: 'Alimentación', upa: 'UPA-003', fechaAsignacionEstado: new Date('2024-03-25') ,estado:false },
    { tipoSistema: 'Control', upa: 'UPA-004', fechaAsignacionEstado: new Date('2024-03-30') ,estado:true }
  ];

  editarElemento(elemento: any) {
    console.log('Editar:', elemento);
  }

  eliminarElemento(elemento: any) {
    this.listaEstados = this.listaEstados.filter(e => e !== elemento);
  }
}
