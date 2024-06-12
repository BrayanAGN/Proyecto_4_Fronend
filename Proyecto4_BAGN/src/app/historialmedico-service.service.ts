import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistorialmedicoServiceService {

  public urlServidor: string ="http://localhost:8082/"; ///ambiente local
  //public urlServidor: string ="http://10.10.10.36:8082/"; ///ambiente de pruebas


  constructor(private http: HttpClient) { 

  }

  obtenerHistorialMedico(idpaciente: number): Observable<any> {
    return this.http.get<any>(this.urlServidor + "api/historial/obtener/" + idpaciente);
  }
}
