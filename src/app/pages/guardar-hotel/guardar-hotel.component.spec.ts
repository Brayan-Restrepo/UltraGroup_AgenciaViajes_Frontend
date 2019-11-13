import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarHotelComponent } from './guardar-hotel.component';

describe('GuardarHotelComponent', () => {
  let component: GuardarHotelComponent;
  let fixture: ComponentFixture<GuardarHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
