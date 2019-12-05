import { Paciente } from "./paciente";
import { Doctor } from "./doctor";
import { Hora } from "./hora";

export class Cita {
    id:number;
    fecha:string;
    identificacion_Paciente:string;
    paciente:Paciente;
    identificacion_Doctor:string;
    doctor:Doctor;
    horario:string;
    hora:Hora;
}
