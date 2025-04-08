import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SalaService {
  // Ruta base para las salas
  private baseUrl: string = 'http://127.0.0.1:8000/api/salas';

  constructor(private http: HttpClient) {}

  // Obtiene el listado de salas
  index(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  // Crea una nueva sala (se usa FormData para enviar archivos, etc.)
  create(sala: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.post(`${this.baseUrl}`, sala, { headers });
  }

  // Muestra el detalle de una sala por ID
  show(id: string): Observable<any> {
    return this.http.get(`http://127.0.0.1:8000/api/data`);
  }

  // Actualiza una sala existente
  update(id: string, sala: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, sala);
  }

  // Elimina una sala
  delete(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Obtiene las salas del usuario autenticado (endpoint: /mine)
  mySalas(): Observable<any> {
    return this.http.get(`${this.baseUrl}/mine`);
  }
}
