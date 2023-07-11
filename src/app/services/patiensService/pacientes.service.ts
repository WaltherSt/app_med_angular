import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  url: string = "http://localhost:3900/api";
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


  getPatiens(): Observable<any> {
    return this.http.get<any>(`${this.url}/patients`).pipe(
      catchError(this.handleError)
    );
  }

  deletePatien(id: string): Observable<any> {
    return this.http.delete(`${this.url}/patients/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  editPatien(id: string): any {
    return this.http.get(`${this.url}/patients/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  updatePatien(id: string, data: any) {
    return this.http.patch(`${this.url}/patients/${id}`, data).pipe(
      catchError(this.handleError)
    )

  }

  createPatien(data: any) {
    console.log(data)
    return this.http.post(`${this.url}/patients`, data).pipe(
      catchError(this.handleError)
    )
  }

  getPatientsByDocument(term: string): Observable<any> {
    return this.http.get<any>(`${this.url}/patients/search/${term}`).pipe(
      catchError(this.handleError)
    );
  }

}
