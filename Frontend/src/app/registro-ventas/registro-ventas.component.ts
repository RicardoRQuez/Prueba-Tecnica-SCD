import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms'
import { ApiService } from '../api.service';
import { RouterLink, Router } from '@angular/router'
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-ventas',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './registro-ventas.component.html',
  styleUrl: './registro-ventas.component.css'
})
export class RegistroVentasComponent {
  ventaForm: FormGroup;

  constructor(private apiService: ApiService, private router: Router) {
    this.ventaForm = new FormGroup({
      descripcion: new FormControl('', [Validators.maxLength(200)]),
      fecha: new FormControl(''),
      valorCLP: new FormControl(''),
      valorUSD: new FormControl(''),
      pagado: new FormControl('')
    });

 }
 
 enviarDatos() {
  const datosVenta = this.ventaForm.value;
  
  datosVenta.pagado = datosVenta.pagado === 'true';

  this.apiService.sendData(datosVenta).subscribe(response => {
    console.log('Datos enviados con éxito:', response);

    this.router.navigate(['/']);
  }, error => {
    console.error('Error al enviar datos:', error);
  });
  }
}
