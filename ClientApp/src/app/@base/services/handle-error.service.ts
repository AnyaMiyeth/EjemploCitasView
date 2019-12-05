import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { AlertModalComponent } from '../modals/alert-modal/alert-modal.component';

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(private modalService: NgbModal) { }

  public handleError<T>(operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      if(error.status == "500"){
        this.error500(error);
      }
      if(error.status == "400"){
        this.error400(error);
      }

      return of(result as T);
    };
  }

  public log(message:string){
    const modalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.title = 'Mensaje';
    modalRef.componentInstance.message = (`${message}`);
  }

  public error500(error:any){
   let mensaje : string = `Estamos teniendo inconvenientes por fabor vuelva a intentarlo .<br/><br/> ${error}`;
    const modalRef = this.modalService.open(AlertModalComponent);
    modalRef.componentInstance.title = 'Mensaje de Error';
    modalRef.componentInstance.message = mensaje;
    console.error(error);
  }

  public error400(error:any): void{
    console.error(error);

    let validaciones : number = 0;
    let mensaje : string = `Señor(a) Usuario(a), error de validacion, por fabor reviselos e intente nuevamente.<br/><br/>`;

    for(const prop in error.error.errors){
      validaciones ++;
      mensaje += `<strong>${validaciones}.${prop}:</strong>`;

      error.error.errors[prop].forEach(element => { 
        mensaje += `<br/> - ${element}`;
      });

      mensaje += `<br/>`;
    }
      const modalRef = this.modalService.open(AlertModalComponent);
      modalRef.componentInstance.title = 'Mensaje de Error';
      modalRef.componentInstance.message = mensaje;

  }
}
