import { Component, OnInit } from '@angular/core';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Tratamiento } from 'src/app/models/tratamiento';

@Component({
  selector: 'app-delete-tratamientos',
  templateUrl: './delete-tratamientos.component.html',
  styleUrls: ['./delete-tratamientos.component.css']
})
export class DeleteTratamientosComponent implements OnInit {

  tratamiento:Tratamiento;
  constructor(
    private tratamientoService:TratamientoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id = +this.route.snapshot.paramMap.get('codigo_tratamiento');
    this.tratamientoService.get(id).subscribe(tratamiento => this.tratamiento = tratamiento);
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    this.tratamientoService.delete(this.tratamiento)
    .subscribe(() => this.goBack());
  }

}
