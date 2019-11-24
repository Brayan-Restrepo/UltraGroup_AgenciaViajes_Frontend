import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReservaComponent } from './gestion-reserva.component';

describe('GestionReservaComponent', () => {
  let component: GestionReservaComponent;
  let fixture: ComponentFixture<GestionReservaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionReservaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
