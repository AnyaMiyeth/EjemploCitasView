import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Cita } from '../models/cita';
import { HandleErrorService } from '../@base/services/handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,
    private handleService:HandleErrorService) { }

  addCita (cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(this.baseUrl+'api/Cita', cita, httpOptions).pipe(
    tap((newCita: Cita) => this.handleService.log(`Registrada la cita del paciente con Numero Identificacion: ${newCita.paciente.identificacion_Paciente} en la fecha ${newCita.fecha}`)),
    catchError(this.handleService.handleError<Cita>('Asignar Cita'))
    );
  }

  getAll():Observable<Cita[]>{
    return this.http.get<Cita[]>(this.baseUrl+'api/Cita').pipe(
        catchError(this.handleService.handleError<Cita[]>('Consulta  Citas',[]))
    );
  }
}
