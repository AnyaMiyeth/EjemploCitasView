import { Component, OnInit } from '@angular/core';
import {PacienteService} from 'src/app/services/paciente.service';
import {Paciente} from 'src/app/models/paciente';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  paciente:Paciente;
  constructor(
    private route : ActivatedRoute,
    private pacienteService: PacienteService,
    private location : Location,
    private formBuilder: FormBuilder
  ) { }
  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.paciente = new Paciente();
    this.get();
    this.registerForm = this.formBuilder.group({
      tipoId: [this.paciente.tipoId, Validators.required],
      identificacion_Paciente: [this.paciente.identificacion_Paciente, Validators.required],
      nombres: [this.paciente.nombres, Validators.required],
      apellidos: [this.paciente.apellidos, Validators.required],
      direccion: [''],
      telefono: [this.paciente.telefono, [ Validators.required, Validators.pattern("^[0-9]*$")]],
      fechaNacimiento: [this.paciente.fechaNacimiento, Validators.required],
      edad: [this.paciente.edad, [Validators.required, Validators.pattern("^[0-9]*$")]],
    });
  }

  get(): void{
    const id = +this.route.snapshot.paramMap.get('identificacion_Paciente');
    this.pacienteService.get(id).subscribe(paciente => {
      this.registerForm.controls['identificacion_Paciente'].setValue(paciente.identificacion_Paciente);
      this.registerForm.controls['nombres'].setValue(paciente.nombres);
      this.registerForm.controls['apellidos'].setValue(paciente.apellidos);
      this.registerForm.controls['direccion'].setValue(paciente.direccion);
      this.registerForm.controls['edad'].setValue(paciente.edad);
      this.registerForm.controls['telefono'].setValue(paciente.telefono);
      this.registerForm.controls['tipoId'].setValue(paciente.tipoId);
      this.registerForm.controls['fechaNacimiento'].setValue(paciente.fechaNacimiento);
    } );
  }
  get f(){ 
    return this.registerForm.controls;
  }

  goBack(): void{
    this.location.back();
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.update();
  }

  update(): void{
    this.paciente = this.registerForm.value;

    this.pacienteService.update(this.paciente).subscribe(() => this.goBack());
  }
 
}
