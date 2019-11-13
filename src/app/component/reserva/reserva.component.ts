import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  
  public formReserva: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formReserva = new FormGroup({
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', [Validators.required,Validators.pattern("^[0-9]*$")]),
      fechaNacimiento: new FormControl('', Validators.required),
      genero: new FormControl('', Validators.required),
      tipoDocumento: new FormControl('', Validators.required),
      numeroDocumento: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required)
    });
  }

}
