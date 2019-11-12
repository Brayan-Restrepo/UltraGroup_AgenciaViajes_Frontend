import { Component, OnInit, Input } from '@angular/core';
import { HabitacionModel } from 'src/app/models/models';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitacion.component.html',
  styleUrls: ['./habitacion.component.css']
})
export class HabitacionComponent implements OnInit {

  @Input('habitaciones') 
  public habitaciones: HabitacionModel[];
  
  @Input('portadaUrl') 
  public portadaUrl: string;
  
  constructor() { }

  ngOnInit() {
  }

}
