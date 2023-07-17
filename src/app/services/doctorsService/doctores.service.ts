import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DoctoresService {
  url: string = "http://localhost:3900/api";
  data = undefined;


  constructor(private http: HttpClient) {  }

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

  getDoctors(): Observable<any> {
    return this.http.get<any>(`${this.url}/doctors`).pipe(
      catchError(this.handleError)
    );
  }

  deleteDoctor(id: string): Observable<any> {
    return this.http.delete(`${this.url}/doctors/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  editDoctor(id: string): any {
    return this.http.get(`${this.url}/doctors/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  updateDoctor(id: string, data: any) {
    return this.http.patch(`${this.url}/doctors/${id}`, data).pipe(
      catchError(this.handleError)
    )

  }

  createDoctor(data: any) {

    return this.http.post(`${this.url}/doctors`, data).pipe(
      catchError(this.handleError)
    )
  }

  getDoctorsBySpecialty(specialty_id: String): Observable<any> {
    return this.http.get<any>(`${this.url}/doctors/specialty/${specialty_id}`).pipe(
      catchError(this.handleError)
    );
  }


}
