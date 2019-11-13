import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { HotelComponent } from './component/hotel/hotel.component';
import { HabitacionComponent } from './component/habitacion/habitacion.component';
import { ReservaComponent } from './component/reserva/reserva.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component:  HomeComponent,
        children: [
          {
            path: 'hotel',
            component:  HotelComponent
          },
          {
            path: 'habitacion/:idHotel',
            component:  HabitacionComponent
          },
          {
            path: 'reserva/:idHabitacion',
            component:  ReservaComponent          },
        ]
      },
      {
        path: 'gestion',
        component:  GestionComponent
      },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'mapa',  pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
