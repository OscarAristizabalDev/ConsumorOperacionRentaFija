import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicioRentaFijaComponent } from './components/servicio-renta-fija/servicio-renta-fija.component';

const routes: Routes = [
  { path: 'servicio', component: ServicioRentaFijaComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})



export class AppRoutingModule { }
