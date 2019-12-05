import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Paciente} from '../models/paciente';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HandleErrorService } from '../@base/services/handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,
    private handleService:HandleErrorService) { }

  addPaciente (paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.baseUrl+'api/Paciente', paciente, httpOptions).pipe(
    tap((newPaciente: Paciente) => this.handleService.log(`Registrado el paciente con Numero Identificacion: ${newPaciente.identificacion_Paciente}`)),
    catchError(this.handleService.handleError<Paciente>('Agregar Paciente'))
    );
  }

  getAll():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.baseUrl+'api/Paciente').pipe(
        catchError(this.handleService.handleError<Paciente[]>('Consulta  Pacientes',[]))
    );
  }

  get(identificacion_Paciente: number): Observable<Paciente>{
    const url = `${this.baseUrl + 'api/paciente'}/${identificacion_Paciente}`;
    return this.http.get<Paciente>(url).pipe(
    tap(_ => this.handleService.log(`Consultado el paciente con numero de Identificacion: ${identificacion_Paciente}`)),
      catchError(this.handleService.handleError<Paciente>(`Identificacion Paciente: ${identificacion_Paciente}`))
    );
  }

  update (paciente: Paciente): Observable<any> {
    const url =`${this.baseUrl + 'api/Paciente'}/${paciente.identificacion_Paciente}`;
      return this.http.put(url, paciente, httpOptions).pipe(
        tap(_ => this.handleService.log(`Modificado el paciente con numero de Identificacion: ${paciente.identificacion_Paciente}`)),
        catchError(this.handleService.handleError<any>('paciente'))
      );
  }

  delete(paciente: Paciente | string): Observable<Paciente> {
    const cedula = typeof paciente === 'string' ? paciente : paciente.identificacion_Paciente;
    const url = `${this.baseUrl + 'api/paciente'}/${cedula}`;
    
    return this.http.delete<Paciente>(url, httpOptions).pipe(
      tap(_ => this.handleService.log(`Eliminado el paciente con numero de Identificacion: ${cedula}`)),
        catchError(this.handleService.handleError<Paciente>('delete'))
    );
  }
  
}
