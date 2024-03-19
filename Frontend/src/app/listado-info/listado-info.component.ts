import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router'


@Component({
 selector: 'app-listado-info',
 standalone: true,
 imports: [CommonModule, RouterLink],
 templateUrl: './listado-info.component.html',
 styleUrls: ['./listado-info.component.css'] 
})
export class ListadoInfoComponent implements OnInit {
 data: any;
i: any;
  

 constructor(private apiService: ApiService, private router: Router) {}
 
 irADetalleVenta(id: string): void {
  this.router.navigate([`/detalle-ventas/${id}`]);
 }
 
 ngOnInit() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
      
    });
 }

 
}
