import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Upa } from '../Models/upa.model'; // asegúrate que esta ruta esté bien

@Injectable({
  providedIn: 'root'
})
export class UpaService {
  private apiUrl = 'http://localhost:4200'; // cambia esto si tienes otro backend

  constructor(private http: HttpClient) {}

  getUpas(): Observable<Upa[]> {
    return this.http.get<Upa[]>(`${this.apiUrl}/upas`);
  }

  createUpa(upa: Upa): Observable<Upa> {
    return this.http.post<Upa>(`${this.apiUrl}/upas`, upa);
  }

  getUpaDetalle(id: number): Observable<Upa> {
    return this.http.get<Upa>(`${this.apiUrl}/upas/${id}`);
  }

  getUpasPorUsuario(usuarioId: number): Observable<Upa[]> {
    return this.http.get<Upa[]>(`${this.apiUrl}/upas?usuarioId=${usuarioId}`);
  }
  
}
