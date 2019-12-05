import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Hora } from '../models/hora';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  horas:Hora[];


  constructor(private activeModal: NgbActiveModal) { }
  
  ngOnInit() {
  }

  actualizar(hora: Hora) {
    this.activeModal.close(hora);
}

}
