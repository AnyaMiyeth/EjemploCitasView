import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pacienteCita'
})
export class PacienteCitaPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPaciente = [];
    if(arg === '' || arg.length < 8){
      return resultPaciente;
    }else{
      
      for(const paciente of value){
        if (paciente.identificacion_Paciente.indexOf(arg) > -1) {
          resultPaciente.push(paciente);
        }
      }
      return resultPaciente;
    }
    
  }

}
