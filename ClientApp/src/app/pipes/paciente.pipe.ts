import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paciente'
})
export class PacientePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' || arg.length < 4) return value;
    const resultPaciente = [];
    for(const paciente of value){
      if (paciente.nombres.indexOf(arg) > -1) {
        resultPaciente.push(paciente);
      }
    }
    return resultPaciente;
  }

}
