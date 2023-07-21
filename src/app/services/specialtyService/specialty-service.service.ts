import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpecialtyServiceService {

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

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.url}/specialties`).pipe(
      catchError(this.handleError)
    );
  }

  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.url}/specialties/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  editItem(id: string): any {
    return this.http.get(`${this.url}/specialties/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  updateItem(id: string, data: any) {
    return this.http.patch(`${this.url}/specialties/${id}`, data).pipe(
      catchError(this.handleError)
    )

  }
  createItem(data: any) {

    return this.http.post(`${this.url}/specialties`, data).pipe(
      catchError(this.handleError)
    )


  }

}
