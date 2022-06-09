import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioRentaFijaComponent } from './servicio-renta-fija.component';

describe('ServicioRentaFijaComponent', () => {
  let component: ServicioRentaFijaComponent;
  let fixture: ComponentFixture<ServicioRentaFijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioRentaFijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioRentaFijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
