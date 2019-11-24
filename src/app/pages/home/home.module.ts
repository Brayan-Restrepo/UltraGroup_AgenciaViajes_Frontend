import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel/hotel.component';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { ReservaComponent } from './reserva/reserva.component';
import { FiltroComponent } from 'src/app/shared/filtro/filtro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HotelComponent,
    HomeComponent,
    HabitacionComponent,
    ReservaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    HomeRoutingModule //<-- import
  ],
  providers: [HotelService]
})
export class HomeModule { }