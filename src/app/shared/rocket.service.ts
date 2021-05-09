import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Rocket } from '../interfaces/rocket';


@Injectable({
  providedIn: 'root'
})
export class RocketService {
  url: string = 'http://localhost:8080/api/rockets';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  rockets: Array<Rocket> = new Array<Rocket>();

  constructor(private http: HttpClient) {
    this.rockets.push({ nom: 'Cccc', annee: 'Cccc' });
   }

  getAllRockets() {
        let API_URL = `${this.url}`;

    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  getRocket(id: any) {
    let API_URL = `${this.url}/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: any) => {
          return res || {}
        }),
        catchError(this.errorMgmt)
      )
  }

  updateRocket(id: number, data: Rocket){
    let API_URL = `${this.url}/${id}`;
    return this.http.put(API_URL, data)
      .pipe(
        map((res: any) => {
          return console.log("service :" + res);
        }),
        catchError(this.errorMgmt)
      );
  }

    
  addRocket(data: Rocket) {
      let API_URL = `${this.url}`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  deleteRocket(id: any) {
    let API_URL = `${this.url}/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      )
  }



  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
