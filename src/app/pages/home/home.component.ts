import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HotelModel } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public formFiltro: FormGroup;
  public hoteles: HotelModel[];
  public verHabitaciones: any;  

  constructor(
    private _hotelService: HotelService
  ) { }

  ngOnInit() {
    this.formFiltro = new FormGroup({
      ciudad: new FormControl('', Validators.required),
      cantidadPersona: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
      fechaEntrada: new FormControl('', Validators.required),
      fechaSalida: new FormControl('', Validators.required)
    });
    this.hoteles = [];
    this.verHabitaciones = {};
  }

  public emitVerHabitaciones($event): void {
    console.log($event);
    this.verHabitaciones = $event;
  }

  public findHotelById(idHotel: string): HotelModel{
    return this.hoteles.find(h => h.id === idHotel);
  }

  public buscarReserva(): void{
    console.log(this.formFiltro.value);
    if (this.formFiltro.valid) {
      const data = {
          ciudad: this.formFiltro.value.ciudad,
          cantidadPersona: this.formFiltro.value.cantidadPersona,
          fechaEntrada: this.parseFecha(this.formFiltro.value.fechaEntrada),
          fechaSalida: this.parseFecha(this.formFiltro.value.fechaSalida)
        };
      
      this._hotelService.postFiltrarHotel(data).subscribe(response => this.hoteles = response);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingrese datos validos',
      })
    }
  }

  private parseFecha(fecha: any): string {
    const month = String(fecha['month']).length === 2? fecha['month']: '0'+fecha['month'];
    const day = String(fecha['day']).length === 2? fecha['day']: '0'+fecha['day'];    
    return `${fecha['year']}-${month}-${day}`;
  }

}
