import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doctor'
})
export class DoctorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultDoctor = [];
    if(arg === '' || arg.length < 8){
      return resultDoctor;
    } else{     
      for(const paciente of value){
        if (paciente.identificacion_Doctor.indexOf(arg) > -1) {
          resultDoctor.push(paciente);
        }
      }
      return resultDoctor;
    } 
  }

}
