import { Component, OnInit } from '@angular/core';
import { HoraService } from 'src/app/services/hora.service';
import { Hora } from 'src/app/models/hora';

@Component({
  selector: 'app-add-hora',
  templateUrl: './add-hora.component.html',
  styleUrls: ['./add-hora.component.css']
})
export class AddHoraComponent implements OnInit {

  constructor(private horaService:HoraService) { }
  hora:Hora;
  horas:Hora[];


  ngOnInit() {
    this.hora = { horario:''};
    this.getAll();
  }

  add(){
    this.horaService.addHora(this.hora)
    .subscribe(() => this.getAll());;
  }

  getAll(){
    this.horaService.getAll().subscribe(horas => this.horas=horas);
  }
  

}
