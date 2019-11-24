import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GuardarHotelComponent } from './guardar-hotel/guardar-hotel.component';
import { GestionReservaComponent } from './gestion-reserva/gestion-reserva.component';
import { GestionComponent } from './gestion/gestion.component';
import { LoginService } from 'src/app/services/login/login.service';
import { ApiService } from 'src/app/services/api/api.service';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    GuardarHotelComponent,
    GestionReservaComponent,
    GestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  providers: [
    ApiService,
    LoginService
  ],
})
export class AdminModule { }
