import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { Tratamiento } from 'src/app/models/tratamiento';
import { TratamientoService } from 'src/app/services/tratamiento.service';

@Component({
  selector: 'app-add-historia',
  templateUrl: './add-historia.component.html',
  styleUrls: ['./add-historia.component.css']
})
export class AddHistoriaComponent implements OnInit {

  constructor(
    private pacienteService : PacienteService,
    private tratamientoService : TratamientoService
    ) { }
    searchPaciente = '';
    searchTratamiento = '';
    pacientes:Paciente[];
    tratamientos:Tratamiento[];
  ngOnInit() {
    this.getAllPacientes();
    this.getAllTratamientos();
  }

  getAllPacientes(){
    this.pacienteService.getAll().subscribe(pacientes=> this.pacientes= pacientes);
  }

  getAllTratamientos(){
    this.tratamientoService.getAll().subscribe(tratamientos=> this.tratamientos=tratamientos);
  }

}
