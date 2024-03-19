import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData() {
     return this.http.get('http://localhost:3000/ventas');
  }
  
  getDataId(id: string) {
    return this.http.get(`http://localhost:3000/ventas/${id}`);
 }
  sendData(venta: any) {
    return this.http.post('http://localhost:3000/ventas', venta);
  }

  editData(id: string, venta: any) {
    return this.http.put(`http://localhost:3000/ventas/${id}`, venta);
  }
  deleteVenta(id: string) {
    return this.http.delete(`http://localhost:3000/ventas/${id}`);
  }
}
