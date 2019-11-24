import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { HotelService } from 'src/app/services/hotel/hotel.service';

@Component({
  selector: 'app-guardar-hotel',
  templateUrl: './guardar-hotel.component.html',
  styleUrls: ['./guardar-hotel.component.css']
})
export class GuardarHotelComponent implements OnInit {

  public formHotel: FormGroup;
  public formHabitacion: FormGroup;

  constructor(
    private _hotelService: HotelService
  ) { }

  ngOnInit() {

    this.formHotel = new FormGroup({
      activo: new FormControl(true, Validators.required),
      nombre: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      estrella: new FormControl('', Validators.required),
      portadaUrl: new FormControl('', Validators.required),
      habitaciones: new FormArray([])
    });

    this.formHabitacion = new FormGroup({
      activo: new FormControl(true, Validators.required),
      costoBase: new FormControl('', Validators.required),
      impuesto: new FormControl('', Validators.required),
      tipoHabitacion: new FormControl('', Validators.required),
      piso: new FormControl('', Validators.required),
      nuemeroHabitacion: new FormControl('', Validators.required),
      cantidadPersona: new FormControl('', Validators.required)
    });
  }
  
  get habitaciones(): FormArray { return this.formHotel.get('habitaciones') as FormArray; }

  private newFormHabitacion(habitacion: any): FormGroup {      
    return new FormGroup({
      activo: new FormControl(true, Validators.required),
      costoBase: new FormControl(habitacion.costoBase, Validators.required),
      impuesto: new FormControl(habitacion.impuesto, Validators.required),
      tipoHabitacion: new FormControl(habitacion.tipoHabitacion, Validators.required),
      piso: new FormControl(habitacion.piso, Validators.required),
      nuemeroHabitacion: new FormControl(habitacion.nuemeroHabitacion, Validators.required),
      cantidadPersona: new FormControl(habitacion.cantidadPersona, Validators.required)
    });
  }
  public onRemoveHabitacion(index: number) {
    this.habitaciones.removeAt(index);
  }

  public onHotel() {
    if (this.formHotel.valid) {
      if (this.habitaciones.length > 0) {
        this._hotelService.postHotel(this.formHotel.value).subscribe(response => {
          Swal.fire({ icon: 'success', title: 'Ok', text: 'Hotel Registrado'});
          this.formHotel.reset();
          this.formHabitacion.reset();
          this.habitaciones.reset()
        }, (error) => {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'El Hotel no se guardo' });
        });
      } else {
        Swal.fire({ icon: 'error', title: 'Oops...', text: 'Ingrese una habitación' });
      }
    } else {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Ingrese datos validos' });
    }
  }

  public onHabitacion() {
    if (this.formHabitacion.valid) {
        this.habitaciones.push(this.newFormHabitacion(this.formHabitacion.value));
        this.formHabitacion.reset();
    } else {
      Swal.fire({ icon: 'error', title: 'Oops...', text: 'Ingrese datos validos' });
    }
  }

}
