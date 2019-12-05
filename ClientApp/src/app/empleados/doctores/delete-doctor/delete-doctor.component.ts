import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/models/doctor';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent implements OnInit {
  doctor:Doctor;
  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private doctorService:DoctorService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =+ this.route.snapshot.paramMap.get('identificacion_Doctor');
    this.doctorService.get(id).subscribe(doctor => this.doctor = doctor);
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    this.doctorService.delete(this.doctor)
    .subscribe(() => this.goBack());
  }

}
