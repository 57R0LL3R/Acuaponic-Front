import { Component, OnInit } from '@angular/core';
import { AdministracionSistema } from '../../../Models/AdministracionSistema';
import { UpaService } from '../../../services/upa.service';
import { Upa } from '../../../Models/upa.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  displayedColumns: string[] = ['tipoSistema', 'upa', 'fechaAsignacionEstado', 'acciones'];
  listaEstados: any[] = []; // temporal mientras defines bien la estructura
  upas: Upa[] = [];

  constructor(private upaservice: UpaService) {}

  ngOnInit(): void {
    this.cargarUpas();
  }

  cargarUpas(): void {
    this.upaservice.getUpas().subscribe(data => {
      this.upas = data;

      // Si quieres que listaEstados use los datos de las UPAs, haz algo como esto:
      this.listaEstados = data.map((upa, index) => ({
        tipoSistema: 'Sistema ' + (index + 1), // cambia esto por el sistema real si lo tienes
        upa: upa.nombre,
        fechaAsignacionEstado: new Date(), // por ahora fecha actual, puedes ajustarla
        estado: false
      }));
    });
  }

  editarElemento(elemento: any) {
    console.log('Editar:', elemento);
  }

  eliminarElemento(elemento: any) {
    this.listaEstados = this.listaEstados.filter(e => e !== elemento);
  }
}

