import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {data} from "autoprefixer";

@Injectable({
  providedIn: 'root'
})
export class MeetsServiceService {

  url: string = "https://backendmedjava-production.up.railway.app/api";
  data = undefined;

  constructor(private http: HttpClient) {
  }

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
      catchError(this.handleError)
    );
  }

  getDoctorAgendaByDate(data: any) {
    return this.http.get<any>(`${this.url}/meets/${data.doctor_id}/${data.date}`).pipe(
      catchError(this.handleError)
    );

  }

  createMeet(data: any) {

    return this.http.post(`${this.url}/meets`, data).pipe(
      catchError(this.handleError)
    )
  }

  deleteMeet(id: string) {
    return this.http.delete(`${this.url}/meets/${id}`).pipe(
      catchError(this.handleError)
    )
  }
}
