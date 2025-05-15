import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl: string = 'https://api.escuelajs.co/api/v1';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/categories`)
  }
  
  getProductsByCategory(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/categories/${id}/products`)
  }
}
