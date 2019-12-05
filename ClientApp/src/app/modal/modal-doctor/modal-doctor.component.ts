import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-modal-doctor',
  templateUrl: './modal-doctor.component.html',
  styleUrls: ['./modal-doctor.component.css']
})
export class ModalDoctorComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

    

  ngOnInit() {
  }

  actualizar(doctor: Doctor) {
    this.activeModal.close(doctor);
  }

}
