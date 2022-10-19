import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Auth } from '../interface/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  private urlAuth: string = "https://634914440b382d796c7d0e8c.mockapi.io/api/users";

  getUser() : Observable<Auth[]>{
    return this.http.get<Auth[]>(this.urlAuth)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  public isAuthorized = false;
  routerIn(){
    this.isAuthorized = true
  }
  routerOut(){
    this.isAuthorized = false
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
