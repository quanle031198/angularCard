import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Products } from '../interface/products';

@Injectable({
  providedIn: 'root'
})
export class DisplayPrdService {

  constructor(private http:HttpClient) { }

  url: string = "http://localhost:3000/Products";
  getProducts(){
    return this.http.get<Products[]>(this.url);
  }
}
