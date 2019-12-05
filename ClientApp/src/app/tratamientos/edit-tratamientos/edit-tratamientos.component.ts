import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento';
import { TratamientoService } from 'src/app/services/tratamiento.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-tratamientos',
  templateUrl: './edit-tratamientos.component.html',
  styleUrls: ['./edit-tratamientos.component.css']
})
export class EditTratamientosComponent implements OnInit {

  tratamiento:Tratamiento;
  constructor(
    private tratamientoService:TratamientoService,
    private route:ActivatedRoute,
    private location:Location
  ) { }
  
  ngOnInit() {
    this.get();
  }

  get(): void{
    
    var id = +this.route.snapshot.paramMap.get('codigo_Tratamiento');
    this.tratamientoService.get(id).subscribe(tratamiento => this.tratamiento = tratamiento);
  }
  goBack(): void{
    this.location.back();
  }

  update(): void{
    this.tratamientoService.update(this.tratamiento).subscribe(() => this.goBack());
  }

}
