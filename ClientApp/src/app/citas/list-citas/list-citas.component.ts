import { Component, OnInit } from '@angular/core';
import { CitaService } from 'src/app/services/cita.service';
import { Cita } from 'src/app/models/cita';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  constructor(private citaService:CitaService) { }
  citas:Cita[];
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.citaService.getAll().subscribe(citas => this.citas = citas);
  }



}
