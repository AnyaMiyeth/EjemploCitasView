import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  @Output() seleccionado = new EventEmitter<Doctor>();
  constructor(private doctorService:DoctorService) { }
  filterDoctor = '';
  doctores:Doctor[];

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.doctorService.getAll().subscribe(result => {
      this.doctores=result;
      this.filterDoctor});
  }

  seleccionar(doctor: Doctor) {
    this.seleccionado.emit(doctor);
  }

}
