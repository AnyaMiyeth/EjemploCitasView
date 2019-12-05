import { Injectable, Inject } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Doctor } from '../models/doctor';
import { tap, catchError } from 'rxjs/operators';
import { HandleErrorService } from '../@base/services/handle-error.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl:string,
    private handleService:HandleErrorService) { }

  addDoctor (doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.baseUrl+'api/Doctor', doctor, httpOptions).pipe(
    tap((newDoctor: Doctor) => this.handleService.log(`Registrado el doctor con numero de Identificacion: ${newDoctor.identificacion_Doctor}`)),
    catchError(this.handleService.handleError<Doctor>('Agregar Doctor'))
    );
  }

  getAll():Observable<Doctor[]>{
    return this.http.get<Doctor[]>(this.baseUrl+'api/Doctor').pipe(
        catchError(this.handleService.handleError<Doctor[]>('getAll',[]))
    );
  }

  get(identificacion_Doctor: number): Observable<Doctor>{
    const url = `${this.baseUrl + 'api/doctor'}/${identificacion_Doctor}`;
    return this.http.get<Doctor>(url).pipe(
    tap(_ => this.handleService.log(`Consultado el doctor con numero Identificacion: ${identificacion_Doctor}`)),
      catchError(this.handleService.handleError<Doctor>(`Identificacion Doctor: ${identificacion_Doctor}`))
    );
  }

  update (doctor: Doctor): Observable<any> {
    const url =`${this.baseUrl + 'api/doctor'}/${doctor.identificacion_Doctor}`;
      return this.http.put(url, doctor, httpOptions).pipe(
        tap(_ => this.handleService.log(`Modificado el doctor con numero de Identificacion: ${doctor.identificacion_Doctor}`)),
        catchError(this.handleService.handleError<any>('doctor'))
      );
  }

  delete(doctor: Doctor | string): Observable<Doctor> {
    const cedula = typeof doctor === 'string' ? doctor : doctor.identificacion_Doctor;
    const url = `${this.baseUrl + 'api/doctor'}/${cedula}`;
    
    return this.http.delete<Doctor>(url, httpOptions).pipe(
      tap(_ => this.handleService.log(`Eliminado el doctor con numero Identificacion: ${cedula}`)),
        catchError(this.handleService.handleError<Doctor>('delete'))
    );
  }
}
