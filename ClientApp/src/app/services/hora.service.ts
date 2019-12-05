import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hora } from '../models/hora';
import { catchError, tap } from 'rxjs/operators';
import { HandleErrorService } from '../@base/services/handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,
    private handleService:HandleErrorService) { }

  addHora (hora: Hora): Observable<Hora> {
    return this.http.post<Hora>(this.baseUrl+'api/Hora', hora, httpOptions).pipe(
    tap((newHora: Hora) => this.handleService.log(`Registrada la hora: ${newHora.horario}`)),
    catchError(this.handleService.handleError<Hora>('Agregar Horario'))
    );
  }

  getAll():Observable<Hora[]>{
    return this.http.get<Hora[]>(this.baseUrl+'api/Hora').pipe(
        catchError(this.handleService.handleError<Hora[]>('getAll',[]))
    );
  }

  get(id: number): Observable<Hora>{
    const url = `${this.baseUrl + 'api/hora'}/${id}`;
    return this.http.get<Hora>(url).pipe(
    tap(_ => this.handleService.log(`Consultada la hora con id: ${id}`)),
      catchError(this.handleService.handleError<Hora>(`Id Hora : ${id}`))
    );
  }

  update (hora: Hora): Observable<any> {
    const url =`${this.baseUrl + 'api/hora'}/${hora.horario}`;
      return this.http.put(url, hora, httpOptions).pipe(
        tap(_ => this.handleService.log(`Modificada la hora con ID: ${hora.horario}`)),
        catchError(this.handleService.handleError<any>('hora'))
      );
  }

  delete(hora: Hora | number): Observable<Hora> {
    const id = typeof hora === 'number' ? hora : hora.horario;
    const url = `${this.baseUrl + 'api/hora'}/${id}`;
    
    return this.http.delete<Hora>(url, httpOptions).pipe(
      tap(_ => this.handleService.log(`Eliminada la hora con id: ${id}`)),
        catchError(this.handleService.handleError<Hora>('delete'))
    );
  }
}
