import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  paciente:Paciente;
  constructor(
    private pacienteService : PacienteService,
    private route : ActivatedRoute,
    private location : Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =+ this.route.snapshot.paramMap.get('identificacion_Paciente');
    this.pacienteService.get(id).subscribe(paciente => this.paciente = paciente);
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    this.pacienteService.delete(this.paciente)
    .subscribe(() => this.goBack());
  }

}
