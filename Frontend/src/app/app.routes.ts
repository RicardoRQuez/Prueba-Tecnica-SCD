import { Routes } from '@angular/router';
import { EditarventaComponent } from './editarventa/editarventa.component';
import { InfoDetalleComponent } from './info-detalle/info-detalle.component';
import { ListadoInfoComponent } from './listado-info/listado-info.component';
import { RegistroVentasComponent } from './registro-ventas/registro-ventas.component';

export const routes: Routes = [
    {path: '', title: "Listado info", component: ListadoInfoComponent, children: []},
    {path: 'registro-ventas', title: "Registro ventas", component: RegistroVentasComponent},
    {path: 'detalle-ventas/:id', title: "Detalle ventas", component: InfoDetalleComponent},
    {path: 'editar-ventas/:id', title: "Editar ventas", component: EditarventaComponent},
/*     {path: "**", title: "Listado info", component: ListadoInfoComponent}
 */];
