import { Component, OnInit } from '@angular/core';
import { HoraService } from 'src/app/services/hora.service';
import { Hora } from 'src/app/models/hora';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/modal/modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalComponent } from 'src/app/@base/modals/alert-modal/alert-modal.component';
import { ModalPacienteComponent } from 'src/app/modal/modal-paciente/modal-paciente.component';
import { ModalDoctorComponent } from 'src/app/modal/modal-doctor/modal-doctor.component';

@Component({
  selector: 'app-add-cita',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent implements OnInit {

  constructor(
    private horaService : HoraService,
    private pacienteService: PacienteService,
    private doctorService: DoctorService,
    private citaService: CitaService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal) { }

    registerForm: FormGroup;
    submitted = false;
    cita:Cita;
    
    searchPaciente = '';
    searchDoctor = '';
  ngOnInit() {
    this.cita = new Cita();
    this.cita.fecha = "";
    this.cita.identificacion_Paciente="";
    this.cita.identificacion_Doctor = "";
    this.cita.horario = "";
    
    this.registerForm = this.formBuilder.group({
      fecha: [this.cita.fecha, Validators.required],
      identificacion_Paciente: [this.cita.identificacion_Paciente, Validators.required],
      pacienteNombres: [''],
      pacienteApellidos: [''],
      doctorNombres: [''],
      doctorApellidos:[''],
      identificacion_Doctor: [this.cita.identificacion_Doctor, Validators.required],
      horario: [this.cita.horario, Validators.required]
    });
  }

  get f(){ 
    return this.registerForm.controls;
  }

  openModal(){
    this.modalService.open(ModalComponent).result.then((hora) => this.actualizarHora(hora));
  }

  actualizarHora(hora:Hora){
    this.registerForm.controls['horario'].setValue(hora.horario);
  }

  openModalPaciente(){
    this.modalService.open(ModalPacienteComponent).result.then((paciente)=> this.actualizar(paciente));
  }
  actualizar(paciente: Paciente) {
        
    this.registerForm.controls['identificacion_Paciente'].setValue(paciente.identificacion_Paciente);
    this.registerForm.controls['pacienteNombres'].setValue(paciente.nombres);
    this.registerForm.controls['pacienteApellidos'].setValue(paciente.apellidos);
  }
  
  openModalDoctor(){
    this.modalService.open(ModalDoctorComponent).result.then((doctor) => this.actualizarDoctor(doctor));
  }

  actualizarDoctor(doctor:Doctor){
    this.registerForm.controls['identificacion_Doctor'].setValue(doctor.identificacion_Doctor);
    this.registerForm.controls['doctorNombres'].setValue(doctor.nombres);
    this.registerForm.controls['doctorApellidos'].setValue(doctor.apellidos);
  }

  create() {
    this.cita = this.registerForm.value;

    this.citaService.addCita(this.cita).subscribe(c => {
        if (c != null) {
            const messageBox = this.modalService.open(AlertModalComponent)
            messageBox.componentInstance.title = "Resultado Operación";
            messageBox.componentInstance.message = 'REGISTRADO LA CITA';
        }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }
    this.create();
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
