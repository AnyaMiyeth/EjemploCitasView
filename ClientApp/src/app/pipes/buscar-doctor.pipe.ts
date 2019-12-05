import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarDoctor'
})
export class BuscarDoctorPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 3) return value;
    const resultDoctor = [];
    for(const doctor of value){
      if(doctor.identificacion_Doctor.indexOf(arg) > -1){
        resultDoctor.push(doctor);
      }
    }
    return resultDoctor;
  }

}
