import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { AppComponent } from './app.component';  // Importa el componente standalone
import { routes } from './app.routes';
import { PrincipalComponent } from './Views/administracion-del-sistema/principal/principal.component';
import { MatTableModule } from '@angular/material/table';
import { PropiedadSistemaComponent } from './Views/administracion-del-sistema/propiedad-sistema/propiedadSistema';
import { GestionDispositivosComponent } from './Views/gestion-dispositivos/gestion-dispositivos.component';
import { GestionElementosComponent } from './Views/gestion-elementos/gestion-elementos.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PropiedadSistemaComponent,
    GestionDispositivosComponent,
    GestionElementosComponent,
      
     ], 
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
