import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeadersComponent } from './components/headers/headers.component';
import { ContentComponent } from './components/content/content.component';
import { SettingComponent } from './components/setting/setting.component';
import { AppRoutingModule } from './app-routing.module';
import { AddComponent } from './pacientes/add/add.component';
import { ListComponent } from './pacientes/list/list.component';
import { EditComponent } from './pacientes/edit/edit.component';
import { DeleteComponent } from './pacientes/delete/delete.component';
import { AddCitaComponent } from './citas/add-cita/add-cita.component';
import { ListCitasComponent } from './citas/list-citas/list-citas.component';
import { EditCitasComponent } from './citas/edit-citas/edit-citas.component';
import { DeleteCitasComponent } from './citas/delete-citas/delete-citas.component';
import { EditHoraComponent } from './horas/edit-hora/edit-hora.component';
import { DeleteHoraComponent } from './horas/delete-hora/delete-hora.component';
import { AddHoraComponent } from './horas/add-hora/add-hora.component';
import { AddHistoriaComponent } from './historia/add-historia/add-historia.component';
import { EditHistoriaComponent } from './historia/edit-historia/edit-historia.component';
import { ListHistoriaComponent } from './historia/list-historia/list-historia.component';
import { ViewHistoriasComponent } from './historia/view-historias/view-historias.component';
import { AddTratamientoComponent } from './tratamientos/add-tratamiento/add-tratamiento.component';
import { EditTratamientosComponent } from './tratamientos/edit-tratamientos/edit-tratamientos.component';
import { DeleteTratamientosComponent } from './tratamientos/delete-tratamientos/delete-tratamientos.component';
import { AddPagosComponent } from './pagos/add-pagos/add-pagos.component';
import { AddDoctorComponent } from './empleados/doctores/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './empleados/doctores/edit-doctor/edit-doctor.component';
import { ListDoctorComponent } from './empleados/doctores/list-doctor/list-doctor.component';
import { DeleteDoctorComponent } from './empleados/doctores/delete-doctor/delete-doctor.component';
import { AddEnfermeraComponent } from './empleados/enfermeras/add-enfermera/add-enfermera.component';
import { ListEnfermeraComponent } from './empleados/enfermeras/list-enfermera/list-enfermera.component';
import { EditEnfermeraComponent } from './empleados/enfermeras/edit-enfermera/edit-enfermera.component';
import { DeleteEnfermeraComponent } from './empleados/enfermeras/delete-enfermera/delete-enfermera.component';
import { PacientePipe } from './pipes/paciente.pipe';
import { DoctorPipe } from './pipes/doctor.pipe';
import { PacienteCitaPipe } from './pipes/paciente-cita.pipe';
import { BuscarDoctorPipe } from './pipes/buscar-doctor.pipe';
import { TratamientoPipe } from './pipes/tratamiento.pipe';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './users/login/login.component';
import { RegistrationComponent } from './users/registration/registration.component';
import { ModalComponent } from './modal/modal.component';
import { AlertModalComponent } from './@base/modals/alert-modal/alert-modal.component';
import { ModalPacienteComponent } from './modal/modal-paciente/modal-paciente.component';
import { ModalDoctorComponent } from './modal/modal-doctor/modal-doctor.component';
import { HorasComponent } from './lists/horas/horas.component';
import { DoctorComponent } from './lists/doctor/doctor.component';
import { PacienteComponent } from './lists/paciente/paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent,
    HeadersComponent,
    ContentComponent,
    SettingComponent,
    AddComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    AddCitaComponent,
    ListCitasComponent,
    EditCitasComponent,
    DeleteCitasComponent,
    EditHoraComponent,
    DeleteHoraComponent,
    AddHoraComponent,
    AddHistoriaComponent,
    EditHistoriaComponent,
    ListHistoriaComponent,
    ViewHistoriasComponent,
    AddTratamientoComponent,
    EditTratamientosComponent,
    DeleteTratamientosComponent,
    AddPagosComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    ListDoctorComponent,
    DeleteDoctorComponent,
    AddEnfermeraComponent,
    ListEnfermeraComponent,
    EditEnfermeraComponent,
    DeleteEnfermeraComponent,
    PacientePipe,
    DoctorPipe,
    PacienteCitaPipe,
    BuscarDoctorPipe,
    TratamientoPipe,
    UsersComponent,
    LoginComponent,
    RegistrationComponent,
    ModalComponent,
    AlertModalComponent,
    ModalPacienteComponent,
    ModalDoctorComponent,
    HorasComponent,
    DoctorComponent,
    PacienteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot([
    ]),
    AppRoutingModule
  ],
  entryComponents: [ModalComponent,
    AlertModalComponent,
    ModalPacienteComponent,
    ModalDoctorComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
