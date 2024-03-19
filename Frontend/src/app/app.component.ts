import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditarventaComponent } from './editarventa/editarventa.component';
import { InfoDetalleComponent } from './info-detalle/info-detalle.component';
import {ListadoInfoComponent} from './listado-info/listado-info.component' 
import { RegistroVentasComponent } from './registro-ventas/registro-ventas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoInfoComponent, RegistroVentasComponent, InfoDetalleComponent, EditarventaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}
