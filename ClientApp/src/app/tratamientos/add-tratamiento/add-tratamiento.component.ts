import { Component, OnInit } from '@angular/core';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { Tratamiento } from 'src/app/models/tratamiento';

@Component({
  selector: 'app-add-tratamiento',
  templateUrl: './add-tratamiento.component.html',
  styleUrls: ['./add-tratamiento.component.css']
})
export class AddTratamientoComponent implements OnInit {

  constructor(private tratamientoService:TratamientoService) { }
  tratamiento:Tratamiento;
  tratamientos:Tratamiento[];
  ngOnInit() {
    this.tratamiento = { codigo_Tratamiento: '', nombre: '', costo: 0 };
    this.getAll();
  }

  add() {
    this.tratamientoService.addTratamiento(this.tratamiento)
    .subscribe(() => this.getAll());
  }

  getAll(){
    this.tratamientoService.getAll().subscribe(tratamientos=>this.tratamientos=tratamientos);
  }

}
