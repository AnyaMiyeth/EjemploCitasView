import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hora } from 'src/app/models/hora';
import { HoraService } from 'src/app/services/hora.service';

@Component({
  selector: 'app-horas',
  templateUrl: './horas.component.html',
  styleUrls: ['./horas.component.css']
})
export class HorasComponent implements OnInit {

  @Output() seleccionado = new EventEmitter<Hora>();
  constructor(private horaService:HoraService) { }
  horas:Hora[];
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.horaService.getAll().subscribe(result => {
      this.horas=result;});
  }
  seleccionar(hora: Hora) {
    this.seleccionado.emit(hora);
  }

}
