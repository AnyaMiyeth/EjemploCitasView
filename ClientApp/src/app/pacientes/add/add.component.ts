import { Component, OnInit } from '@angular/core';
import {PacienteService} from 'src/app/services/paciente.service';
import {Paciente} from 'src/app/models/paciente';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'src/app/@base/modals/alert-modal/alert-modal.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private pacienteService:PacienteService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }
  paciente:Paciente;
  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.paciente = new Paciente();
    this.paciente.tipoId = "";
    this.paciente.identificacion_Paciente = "";
    this.paciente.nombres = "";
    this.paciente.apellidos = "";
    this.paciente.direccion = "";
    this.paciente.telefono = "";
    this.paciente.fechaNacimiento = "";
    this.paciente.edad = 0;

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

  get f(){ 
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.create();
  }
  create() {
    this.paciente = this.registerForm.value;

    this.pacienteService.addPaciente(this.paciente).subscribe(p => {
        if (p != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'REGISTRADO';
        }
    });
}


}
