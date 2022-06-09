import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Operation } from '../models/operation';

@Injectable()
export class OperacionRentaFijaFicsService {

  constructor(private httpService: HttpClient) { }

  createComplementationRentaFijaFics(operation: Operation){
    return this.httpService.post('http://10.116.23.150/Complementacion/ServicesMasivo/api/AdminComplementation/OperacionRentaFijaFICS'
      , JSON.stringify(operation), this.setOptions())
  }

  private setOptions() {
    const options = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };
    return options;
}

}
