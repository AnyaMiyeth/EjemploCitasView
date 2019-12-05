import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HoraService } from 'src/app/services/hora.service';
import { ActivatedRoute } from '@angular/router';
import { Hora } from 'src/app/models/hora';

@Component({
  selector: 'app-delete-hora',
  templateUrl: './delete-hora.component.html',
  styleUrls: ['./delete-hora.component.css']
})
export class DeleteHoraComponent implements OnInit {

  hora:Hora;
  constructor(
    private location:Location,
    private horaService:HoraService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.get();
  }

  get(): void {
    const id =+ this.route.snapshot.paramMap.get('horario');
    this.horaService.get(id).subscribe(hora => this.hora = hora);
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    this.horaService.delete(this.hora)
    .subscribe(() => this.goBack());
  }

}
