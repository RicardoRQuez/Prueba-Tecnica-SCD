import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editarventa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editarventa.component.html',
  styleUrl: './editarventa.component.css'
})
export class EditarventaComponent {
  editForm: FormGroup;
  data: any;

  constructor(private ApiService: ApiService, private router: Router) {
    this.editForm = new FormGroup({
      id: new FormControl(''),
      descripcion: new FormControl(''),
      fecha: new FormControl(''),
      valorCLP: new FormControl(''),
      valorUSD: new FormControl(''),
      pagado: new FormControl('')
    });
 }

 @Input('id') ventaId!: string;

 ngOnInit() {
  this.ApiService.getDataId(this.ventaId).subscribe(response => {
    this.data = response;
    console.log("Info Detalle", this.data);

    this.editForm.patchValue({
      fecha: this.data.fecha,
      descripcion: this.data.descripcion,
      id: this.data.id,
      valorUSD: this.data.valorUSD,
      valorCLP: this.data.valorCLP,
      pagado: this.data.pagado
    });
  })
} 
/* convertirAFechaHTML(fecha: string): string {
  const partesFecha = fecha.split('-');
  return `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;
} */


 irADetalleVenta(id: string): void {
  this.router.navigate([`/detalle-ventas/${id}`]);
 }
 
 enviarDatos() {
  const editDatos = this.editForm.value;

  editDatos.pagado = editDatos.pagado === 'true';

  this.ApiService.editData(this.ventaId, editDatos).subscribe(response => {
    console.log('Datos enviados con éxito:', response);

    this.router.navigate([`/detalle-ventas/${this.ventaId}`]);
  }, error => {
    console.error('Error al enviar datos:', error);
  }); 
  }

 /* editarDatos() {
  const datosEdit = this.editForm.value;
  datosEdit.pagado = datosEdit.pagado === 'true';

  this.apiService.editData(id, datosEdit).subscribe(response => {
    console.log('Datos enviados con éxito:', response);
  }, error => {
    console.error('Error al enviar datos:', error);
  });
  } */
}
