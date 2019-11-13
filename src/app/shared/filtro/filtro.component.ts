import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { HotelStoreService } from 'src/app/store/service/hotelStore.service';
import { HotelService } from 'src/app/services/hotel/hotel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent implements OnInit {

  public formFiltro: FormGroup;
  
  constructor(
    private router: Router,
    private _hotelService: HotelService,
    private _hotelStoreService: HotelStoreService
    ) { }

  ngOnInit() {
    this.formFiltro = new FormGroup({
      ciudad: new FormControl('Medellin', Validators.required),
      cantidadPersona: new FormControl('3', [Validators.required,Validators.pattern("^[0-9]*$")]),
      fechaEntrada: new FormControl('2019-11-08', Validators.required),
      fechaSalida: new FormControl('2019-11-30', Validators.required)
    });
  }
  
  public buscarReserva(): void {
    if (this.formFiltro.valid) {
      const data = {
          ciudad: this.formFiltro.value.ciudad,
          cantidadPersona: this.formFiltro.value.cantidadPersona,
          fechaEntrada: this.parseFecha(this.formFiltro.value.fechaEntrada),
          fechaSalida: this.parseFecha(this.formFiltro.value.fechaSalida)
        };
      
      this._hotelService.postFiltrarHotel(data).subscribe(response => {
          this._hotelStoreService.addHotel(response);
          this.router.navigate(['home', 'hotel'])
        });
    } else {
      Swal.fire({icon: 'error',title: 'Oops...',text: 'Ingrese datos validos'});
    }
  }

  private parseFecha(fecha: any): string {
    const month = String(fecha['month']).length === 2? fecha['month']: '0'+fecha['month'];
    const day = String(fecha['day']).length === 2? fecha['day']: '0'+fecha['day'];    
    return `${fecha['year']}-${month}-${day}`;
  }

}
