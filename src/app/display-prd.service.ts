import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class DisplayPrdService {

  constructor(private http:HttpClient) { }

  url: string = "http://localhost:4200/Prodcucts";
  getProducts(){
    return this.http.get<Products[]>(this.url);
  }
}
