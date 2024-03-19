import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router'


@Component({
  selector: 'app-info-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './info-detalle.component.html',
  styleUrl: './info-detalle.component.css'
})
export class InfoDetalleComponent implements OnInit{
  data: any;
  fechaFormateada!: string;
  booleanFormateado!: string;
  
  
  constructor(private ApiService: ApiService, private router: Router) {}
  @Input('id') ventaId!: string;

  ngOnInit() {
    this.ApiService.getDataId(this.ventaId).subscribe(response => {
      this.data = response;
      console.log("Info Detalle info", this.data, this.data.pagado);
      this.fechaFormateada = this.convertirAFechaHTML(this.data.fecha);

      this.booleanFormateado = this.convertirBoolean(this.data.pagado);
    
    })
  } 
  convertirBoolean(valor: true): string {
    return valor ? "Si" : "No";
  }

  convertirAFechaHTML(fecha: string): string {
    const partesFecha = fecha.split('-');
    return `${partesFecha[2]}-${partesFecha[1]}-${partesFecha[0]}`;
  }
  irADetalleVenta(id: string): void {
    this.router.navigate([`/editar-ventas/${id}`]);
   }
   
   @ViewChild('confirmDeleteModal') confirmDeleteModal!: ElementRef;

  openModal() {
    const modal = document.querySelector('#confirmDeleteModal');
    if (modal) {
      modal.classList.add('show');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('style', 'display: block');
    }
  }
  closeModal() {
  const modal = document.querySelector('#confirmDeleteModal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-modal', 'false');
    modal.setAttribute('style', 'display: none');
  }
  }
  eliminarVenta(id: string): void {
    this.ApiService.deleteVenta(id).subscribe(response => {
      this.data = response;
    })
    this.closeModal();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 100);  }
}


