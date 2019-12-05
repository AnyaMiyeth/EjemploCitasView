import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tratamiento'
})
export class TratamientoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultaTratamiento = [];
    if(arg === '' || arg.length < 5){
      return resultaTratamiento;
    }else{
      for(const tratamiento of value){
        if(tratamiento.codigo.indexOf(arg) > -1){
          resultaTratamiento.push(tratamiento)
        }
      }
      return resultaTratamiento;
    }
  }

}
