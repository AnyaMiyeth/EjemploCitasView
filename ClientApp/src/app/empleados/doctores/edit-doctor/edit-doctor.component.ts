import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor:Doctor;
  constructor(
    private doctorService:DoctorService,
    private location:Location,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void{
    const id = +this.route.snapshot.paramMap.get('identificacion_Doctor');
    this.doctorService.get(id).subscribe(doctor => this.doctor = doctor);
  }

  goBack(): void{
    this.location.back();
  }

  update(): void{
    this.doctorService.update(this.doctor).subscribe(() => this.goBack());
  }

}
