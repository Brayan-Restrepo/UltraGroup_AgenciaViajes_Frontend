import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HederComponent } from './shared/heder/heder.component';
import { ApiService } from './services/api/api.service';
import { HotelService } from './services/hotel/hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HotelComponent } from './component/hotel/hotel.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { StoreModule } from '@ngrx/store';
import {hotelesReducer} from './reducers/index';
import { FiltroComponent } from './shared/filtro/filtro.component';
import { ReservaComponent } from './component/reserva/reserva.component';
import { GestionReservaComponent } from './pages/gestion-reserva/gestion-reserva.component';
import { GuardarHotelComponent } from './pages/guardar-hotel/guardar-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LoginComponent,
    HomeComponent,
    GestionComponent,
    HederComponent,
    HotelComponent,
    HabitacionComponent,
    FiltroComponent,
    ReservaComponent,
    GuardarHotelComponent,
    GestionReservaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    SweetAlert2Module.forRoot(),
    // StoreModule.forRoot(fromHotel.reducer, {
    //   runtimeChecks: {
    //     strictStateImmutability: true,
    //     strictActionImmutability: true
    //   }
    // }),
    StoreModule.forRoot(
       {hotel: hotelesReducer }
    )
  ],
  providers: [
    ApiService,
    HotelService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
