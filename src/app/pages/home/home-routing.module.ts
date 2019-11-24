import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HotelComponent } from './hotel/hotel.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HabitacionComponent } from './habitacion/habitacion.component';
import { HomeComponent } from './home/home.component';

const homeRoutes: Routes = [
    {
        path: '',
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
            component:  ReservaComponent
          },
        ]
      },
  ];
  
  //taken from angular.io
  //Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
  //that's where you register top level application routes). In any other module, you 
  //must call the RouterModule.forChild method to register additional routes.
  
  @NgModule({
    imports: [
      RouterModule.forChild(homeRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class HomeRoutingModule { }