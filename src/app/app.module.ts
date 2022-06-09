import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServicioRentaFijaComponent } from './components/servicio-renta-fija/servicio-renta-fija.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { OperacionRentaFijaFicsService } from './services/operacion-renta-fija-fics.service';



@NgModule({
  declarations: [
    AppComponent,
    ServicioRentaFijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [OperacionRentaFijaFicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
