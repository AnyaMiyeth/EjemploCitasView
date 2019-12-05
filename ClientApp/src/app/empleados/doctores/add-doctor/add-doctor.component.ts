import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }
  doctor:Doctor;

  ngOnInit() {
    this.doctor = { id: 0, identificacion_Doctor: '', nombres: '', apellidos: '', direccion: '', telefono: '',telefono2: '' ,fechaNacimiento: '', edad:0 };
  }

  add() {
    this.doctorService.addDoctor(this.doctor)
    .subscribe(doctor => {
    alert('Se agrego un nuevo doctor')
    });
  }

}
