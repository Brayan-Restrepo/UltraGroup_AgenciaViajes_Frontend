import { Component, OnInit } from '@angular/core';
import { HotelModel } from 'src/app/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  public hoteles: HotelModel[];
  public verHabitaciones: any;  
  constructor() { }

  ngOnInit() {  }
}
