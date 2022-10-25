import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Products } from '../interface/products';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayPrdService {

  constructor(private http:HttpClient) { }

  url: string = "https://634914440b382d796c7d0e8c.mockapi.io/api/product";

  getProducts(): Observable<Products>{
    return this.http.get<Products>(this.url)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getPrdSearch(username: string) : Observable<Products>{ 
    return this.http.get<Products>(`${this.url}?search=${username}`)
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
