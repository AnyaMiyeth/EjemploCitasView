import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.css']
})
export class ListDoctorComponent implements OnInit {

  constructor(private doctorService:DoctorService) { }
  filterDoctor = '';
  doctores:Doctor[];

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.doctorService.getAll().subscribe(doctores=>this.doctores=doctores);
  }

}
