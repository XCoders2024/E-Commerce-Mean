import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private Url = environment.baseApi;
  //-------------------------------------------------
  constructor(private http: HttpClient) {}
  getAllProducts() {
    return this.http.get(`http://localhost:3005/api/v1/product`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }
 getAllCategory() {
    return this.http.get(`http://localhost:3005/api/v1/category`).pipe(
      catchError((err) => {
        return throwError(() => err.message || 'ServerError');
      })
    );
  }
}
