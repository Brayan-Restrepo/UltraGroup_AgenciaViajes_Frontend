import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HotelModel } from 'src/app/models/models';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input('hoteles') 
  public hoteles: HotelModel[];

  @Output() verHabitaciones = new EventEmitter();

  constructor(
    configEstrella: NgbRatingConfig
  ) {
    configEstrella.max = 5;
    configEstrella.readonly = true;
    // this.verHabitaciones
   }

  ngOnInit() {
  }

  public onVerHabitaciones(idHotel: string) {
    console.log('onVerHabitaciones');
    this.verHabitaciones.emit({idHotel: idHotel, activar: true});
  }

}
