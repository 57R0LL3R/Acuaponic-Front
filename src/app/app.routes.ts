import { Routes } from '@angular/router';
import { PrincipalComponent } from './Views/administracion-del-sistema/principal/principal.component';
import { PropiedadSistemaComponent } from './Views/administracion-del-sistema/propiedad-sistema/propiedadSistema';
import { GestionDispositivosComponent } from './Views/gestion-dispositivos/gestion-dispositivos.component';
import { GestionElementosComponent } from './Views/gestion-elementos/gestion-elementos.component';
import { EventosComponent } from './Views/eventos/eventos.component';

export const routes: Routes = [
    { path: 'Administracion-del-Sistema/Principal', component: PrincipalComponent },
    { path: 'Administracion-del-Sistema/Propiedad-sistema', component: PropiedadSistemaComponent },
    { path: 'gestion-dispositivos', component: GestionDispositivosComponent },
    { path: 'gestion-elementos', component: GestionElementosComponent },
    { path: 'eventos', component: EventosComponent},

];
