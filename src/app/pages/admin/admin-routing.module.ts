import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuardarHotelComponent } from './guardar-hotel/guardar-hotel.component';
import { GestionReservaComponent } from './gestion-reserva/gestion-reserva.component';
import { GestionComponent } from './gestion/gestion.component';

const adminRoutes: Routes = [{
    path: '',
    component: GestionComponent,
    children: [
        {
            //   canActivate: [LoginService],
            path: 'gestion',
            component: GuardarHotelComponent
        },
        {
            //   canActivate: [LoginService],
            path: 'gestion_reservas',
            component: GestionReservaComponent
        }]
}
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }