import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EquiposDto } from './models/equipos';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private apiUrl = 'http://localhost:8080/afa/equipos'

  constructor(private http: HttpClient) { }

  obtenerEquipos(): Observable<EquiposDto[]> {
    return this.http.get<EquiposDto[]>(this.apiUrl);
  }
}
