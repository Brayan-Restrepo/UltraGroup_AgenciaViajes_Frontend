import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { HabitacionModel } from 'src/app/models/models';
import { Observable } from 'rxjs';
import { HotelStoreService } from 'src/app/store/service/hotelStore.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {


  public selectHabitacion$: Observable<HabitacionModel>;

  public formReserva: FormGroup;
  public formHuesped: FormGroup;

  public costoBase: string;
  public impuesto: string;
  public cantidadPersona: string;
  public idHabitacion: string;


  constructor(
    private router: Router,
    private rutaActiva: ActivatedRoute,
    private _hotelStoreService: HotelStoreService,
    private _hotelService: HotelService
  ) { }

  async ngOnInit() {
    this.costoBase = '';
    this.impuesto = '';
    this.cantidadPersona = '';

    this.rutaActiva.params.subscribe((params: Params) => {
      this._hotelStoreService.getSelectHotelByIdHabitacion$(params.idHabitacion).subscribe(response => {
        if (response) {
          this.idHabitacion = params.idHabitacion;
          const data = response.habitaciones.find(h => h.id === params.idHabitacion);
          this.costoBase = data.costoBase;
          this.impuesto = data.impuesto;
          this.cantidadPersona = data.cantidadPersona;
        } else {
          this.router.navigate(['home']);
        }
      });
    });

    this.formReserva = new FormGroup({
      habitacionId: new FormControl(this.idHabitacion, Validators.required),
      fechaEntrada: new FormControl({ value: '', disabled: true }, Validators.required),
      fechaSalida: new FormControl({ value: '', disabled: true }, Validators.required),
      huespedes: new FormArray([]),
      contactoEmergencia: new FormGroup({
        nombreCompleto: new FormControl('', Validators.required),
        telefono: new FormControl('', Validators.required),
      })
    });

    this.formHuesped = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      tipoDocumento: new FormControl('', Validators.required),
      numeroDocumento: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required)
    });
  }

  get huespedes(): FormArray { return this.formReserva.get('huespedes') as FormArray; }

  public onHuesped(): void {
    if (this.formHuesped.valid) {
      if (Number(this.cantidadPersona) > this.huespedes.length) {
        this.huespedes.push(this.newFormHuesped(this.formHuesped.value));
        this.formHuesped.reset();
      } else {
        Swal.fire({ icon: 'info', title: 'Oops...', text: 'Capasidad maxima de la habitación' });
      }
    } else {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Ingrese datos validos' });
    }
  }

  private newFormHuesped(huesped: any): FormGroup {
    return new FormGroup({
      nombres: new FormControl(huesped.nombres, Validators.required),
      apellidos: new FormControl(huesped.apellidos, Validators.required),
      fechaNacimiento: new FormControl(huesped.fechaNacimiento, Validators.required),
      genero: new FormControl(huesped.genero, Validators.required),
      tipoDocumento: new FormControl(huesped.tipoDocumento, Validators.required),
      numeroDocumento: new FormControl(huesped.numeroDocumento, Validators.required),
      email: new FormControl(huesped.email, Validators.required),
      telefono: new FormControl(huesped.telefono, Validators.required)
    });
  }

  public onRemoveHuesped(index: number): void {
    this.huespedes.removeAt(index);
  }

  public onReservar(): void {
    if (this.formReserva.valid) {
      if (this.huespedes.length > 0) {
        this._hotelService.postReservar(this.formReserva.value).subscribe(() => {
          Swal.fire({ icon: 'success', title: 'Ok', text: 'Reserva registrada' }).then(a => {
            this.router.navigate(['home']);
          });
        }, () => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'No se pudo hacer la reserva' });
        })
      } else {
        Swal.fire({ icon: 'info', title: 'Oops...', text: 'Ingrese un huésped' });
      }
    } else {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Ingrese datos validos' });
    }
  }
}
