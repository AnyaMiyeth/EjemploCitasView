import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  @Output() seleccionado = new EventEmitter<Paciente>();
  constructor(private pacienteService:PacienteService) { }
  pacientes:Paciente[];
  filterPaciente= '';

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.pacienteService.getAll().subscribe(result => {
      this.pacientes=result;
      this.filterPaciente});
  }

  seleccionar(paciente: Paciente) {
    this.seleccionado.emit(paciente);
  }

}
