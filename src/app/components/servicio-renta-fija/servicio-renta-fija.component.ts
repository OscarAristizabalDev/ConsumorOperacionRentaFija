import { Component, OnInit } from '@angular/core';
import { Fraction } from '../../models/fraction';
import { Operation } from '../../models/operation';
import { OperacionRentaFijaFicsService } from '../../services/operacion-renta-fija-fics.service';

@Component({
  selector: 'app-servicio-renta-fija',
  templateUrl: './servicio-renta-fija.component.html',
  styleUrls: ['./servicio-renta-fija.component.css']
})
export class ServicioRentaFijaComponent implements OnInit {

  constructor(private serviceRentaFija: OperacionRentaFijaFicsService) { }

  operation: Operation;
  fraction: Fraction;

  ngOnInit() {

    console.log('entro');

    this.fraction = new Fraction();
    this.fraction.Quantity = 1725;
    this.fraction.IdNumber = "162210";
    this.fraction.TypeNumber = "CC";
    this.fraction.IdOrderBOF = "2233";
    this.fraction.Commission = 0E+0;
    this.fraction.Deceval = "CO99CRRDXXX1CC0000000320780007";
    this.fraction.SpecialFiduciary = "F5";

    this.operation = new Operation();
    this.operation.IdOperation = '90833';
    this.operation.Nemonic = 'BCOS718SE';
    this.operation.Side = '2';
    this.operation.rentaFijaTerceros = true;
    this.operation.rentaFijaFics = false;
    this.operation.subasta = false;
    this.operation.Fractions = new Array<Fraction>();
    this.operation.Fractions.push(this.fraction);
  }

  sendOperation(){
    console.log('entro 1');
    this.serviceRentaFija.createComplementationRentaFijaFics(this.operation).subscribe(
      response => {
        console.log(response);
      }
    )
  }

}
