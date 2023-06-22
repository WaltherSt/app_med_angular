import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MeetsServiceService {

  url: string = "http://localhost:3900/api";
  data = undefined;
  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del cliente
      console.error('Error:', error.error.message);
    } else {
      // Error del servidor
      console.error(`Código de error: ${error.status}, ` + `mensaje: ${error.error}`);
    }
    return throwError('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
  }

  getMeets(): Observable<any> {
    return this.http.get<any>(`${this.url}/meets`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getDoctorAgendaByDate(data:any){
    return this.http.get<any>(`${this.url}/meets/${data.doctor_id}/${data.date}`).pipe(
      retry(2),
      catchError(this.handleError)
    );

  }
/*
  deleteDoctor(id: string): Observable<any> {
    return this.http.delete(`${this.url}/doctors/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  editDoctor(id: string): any {
    return this.http.get(`${this.url}/doctors/${id}`).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  updateDoctor(id: string, data: any) {
    return this.http.patch(`${this.url}/doctors/${id}`, data).pipe(
      catchError(this.handleError)
    )

  }*/

  createMeet(data: any) {
    console.log(data)
    return this.http.post(`${this.url}/meets`, data).pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
}
