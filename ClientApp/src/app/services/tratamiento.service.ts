import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Tratamiento } from '../models/tratamiento';
import { catchError, tap } from 'rxjs/operators';
import { HandleErrorService } from '../@base/services/handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,
    private handleService:HandleErrorService) { }

  addTratamiento (tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>(this.baseUrl+'api/tratamiento', tratamiento, httpOptions).pipe(
    tap((newTratamiento: Tratamiento) => this.handleService.log(`Registrado el tratamiento con Codigo: ${newTratamiento.codigo_Tratamiento}`)),
    catchError(this.handleService.handleError<Tratamiento>('Agregar Tratamiento'))
    );
  }

  getAll():Observable<Tratamiento[]>{
    return this.http.get<Tratamiento[]>(this.baseUrl+'api/tratamiento').pipe(
        catchError(this.handleService.handleError<Tratamiento[]>('getAll',[]))
    );
  }

  get(codigo_Tratamiento: number): Observable<Tratamiento>{
    const url = `${this.baseUrl + 'api/tratamiento'}/${codigo_Tratamiento}`;
    return this.http.get<Tratamiento>(url).pipe(
    tap(_ => this.handleService.log(`Consultado el tratamiento con codigo: ${codigo_Tratamiento}`)),
      catchError(this.handleService.handleError<Tratamiento>(`Codigo Tratamiento: ${codigo_Tratamiento}`))
    );
  }

  update (tratamiento: Tratamiento): Observable<any> {
    const url =`${this.baseUrl + 'api/tratamiento'}/${tratamiento.codigo_Tratamiento}`;
      return this.http.put(url, tratamiento, httpOptions).pipe(
        tap(_ => this.handleService.log(`Modificado el tratamiento con Codigo: ${tratamiento.codigo_Tratamiento}`)),
        catchError(this.handleService.handleError<any>('tratamiento'))
      );
  }

  delete(tratamiento: Tratamiento | number): Observable<Tratamiento> {
    const codigo = typeof tratamiento === 'number' ? tratamiento : tratamiento.codigo_Tratamiento;
    const url = `${this.baseUrl + 'api/tratamiento'}/${codigo}`;
    
    return this.http.delete<Tratamiento>(url, httpOptions).pipe(
      tap(_ => this.handleService.log(`Eliminado el tratamiento con codigo: ${codigo}`)),
        catchError(this.handleService.handleError<Tratamiento>('delete'))
    );
  }
}
