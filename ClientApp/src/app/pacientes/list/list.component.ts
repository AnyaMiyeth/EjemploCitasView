import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {PacienteService} from 'src/app/services/paciente.service';
import {Paciente} from 'src/app/models/paciente';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() seleccionado = new EventEmitter<Paciente>();
  pacientes: Paciente[];
  constructor(private pacienteService:PacienteService) { }
  filterPaciente = '';
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.pacienteService.getAll().subscribe(result => {
      this.pacientes=result;});
  }
  seleccionar(paciente: Paciente) {
    this.seleccionado.emit(paciente);
  }
}
