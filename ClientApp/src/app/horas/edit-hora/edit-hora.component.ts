import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HoraService } from 'src/app/services/hora.service';
import { Hora } from 'src/app/models/hora';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-hora',
  templateUrl: './edit-hora.component.html',
  styleUrls: ['./edit-hora.component.css']
})
export class EditHoraComponent implements OnInit {

  hora:Hora;
  constructor(
    private location:Location,
    private route:ActivatedRoute,
    private horaService:HoraService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void{
    const id = +this.route.snapshot.paramMap.get('horario');
    this.horaService.get(id).subscribe(hora => this.hora = hora);
  }

  goBack(): void{
    this.location.back();
  }

  update(): void{
    this.horaService.update(this.hora).subscribe(() => this.goBack());
  }

}
