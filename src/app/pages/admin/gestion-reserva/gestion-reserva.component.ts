import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { HotelModel, ReservaModel, HabitacionModel, HuespedesModel, ContactoEmergenciaModel } from 'src/app/models/models';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gestion-reserva',
  templateUrl: './gestion-reserva.component.html',
  styleUrls: ['./gestion-reserva.component.css']
})
export class GestionReservaComponent implements OnInit {

  public hoteles: HotelModel[];
  public reservas: ReservaModel[];
  public huespedes: HuespedesModel[];
  public contactoEmergencia: ContactoEmergenciaModel;

  constructor(
    private _hotelService: HotelService,
    config: NgbModalConfig, 
    private modalService: NgbModal
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.hoteles = [];
    this.reservas = [];
    this.huespedes = [];
    this._hotelService.getHotel().subscribe(response => {
      this.hoteles = response;
    });
    this._hotelService.getReservas().subscribe(response => {
      this.reservas = response;
    });
  }

  public campoHotel(idHanitacion: string, parametro: string, hotel: boolean): string {
    const data = this.hoteles.find(h => this.findHabitacionById(h.habitaciones, idHanitacion));
    if (data) {
      if (hotel) {
        return data[parametro];
      } else {
        return data.habitaciones.find(h => h.id === idHanitacion)[parametro];
      }
    } else {
      return '';
    }
  }

  private findHabitacionById(habitaciones: HabitacionModel[], idHanitacion: string): boolean {
    return habitaciones.find(h => h.id === idHanitacion)? true: false;
  }

  open(content, idReserva: string) {
    const data = this.reservas.find(r => r.id === idReserva);
    if (data) {      
      this.huespedes = data.huespedes;
      this.contactoEmergencia =data.contactoEmergencia;
      this.modalService.open(content, {size: 'xl'});
    }
  }
}
